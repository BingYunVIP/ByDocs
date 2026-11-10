/* This is a script to create a new post markdown file with front-matter */

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { pinyin } from "pinyin-pro";

function getDate() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

const args = process.argv.slice(2);

if (args.length === 0) {
	console.error(`Error: No filename argument provided
Usage: pnpm new-post <filename[-zh|-en][.md|.mdx]>`);
	process.exit(1); // Terminate the script and return error code 1
}

let fileName = args[0];

// Add .md extension if not present
const fileExtensionRegex = /\.(md|mdx)$/i;
if (!fileExtensionRegex.test(fileName)) {
	fileName += ".md";
}

const targetDir = "./src/content/posts/";
const extension = path.extname(fileName).toLowerCase();
const sourceStem = fileName.slice(0, -extension.length);
const languageMatch = sourceStem.match(/-(zh|en)$/);
const lang = languageMatch?.[1] || "zh";
const translationKey = sourceStem
	.replace(/-(zh|en)$/, "")
	.replaceAll("\\", "/");
if (
	path.isAbsolute(fileName) ||
	translationKey.split("/").some((part) => part === ".." || !part)
) {
	console.error("Error: Use a filename inside src/content/posts.");
	process.exit(1);
}
fileName = `${translationKey}-${lang}${extension}`;
const fullPath = path.join(targetDir, fileName);

// Generate slug from filename: strip extension, strip trailing /index
let slug = translationKey;
if (slug.endsWith("/index")) {
	slug = slug.slice(0, -"/index".length);
}

// Convert Chinese characters to pinyin, keep other chars as-is
slug = slug
	.split("/")
	.map((segment) => {
		if (!/[一-鿿]/.test(segment)) return segment;
		// Process character by character: Chinese → pinyin, others → keep
		const chars = [...segment];
		const parts = [];
		let buf = "";
		for (const ch of chars) {
			if (/[一-鿿]/.test(ch)) {
				if (buf) {
					parts.push(buf);
					buf = "";
				}
				parts.push(pinyin(ch, { toneType: "none", type: "array" })[0]);
			} else {
				buf += ch;
			}
		}
		if (buf) parts.push(buf);
		return parts
			.join("-")
			.toLowerCase()
			.replace(/[^a-z0-9-]/g, "")
			.replace(/-+/g, "-")
			.replace(/^-|-$/g, "");
	})
	.join("/");

// Reuse an existing counterpart's public slug and pairing key.
let pairedKey = translationKey;
let published = getDate();
for (const suffix of [".md", ".mdx"]) {
	const counterpart = path.join(
		targetDir,
		`${translationKey}-${lang === "zh" ? "en" : "zh"}${suffix}`,
	);
	if (!fs.existsSync(counterpart)) continue;
	const raw = fs.readFileSync(counterpart, "utf8");
	const { data } = matter(raw);
	published = raw.match(/^published:\s*(.+)$/m)?.[1]?.trim() || published;
	if (typeof data.slug === "string" && data.slug) slug = data.slug;
	if (typeof data.translationKey === "string" && data.translationKey) {
		pairedKey = data.translationKey;
	}
	break;
}

if (
	[".md", ".mdx"].some((suffix) =>
		fs.existsSync(path.join(targetDir, `${translationKey}-${lang}${suffix}`)),
	)
) {
	console.error(`Error: File ${fullPath} already exists `);
	process.exit(1);
}

// recursive mode creates multi-level directories
const dirPath = path.dirname(fullPath);
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath, { recursive: true });
}

const content = `---
title: ${JSON.stringify(translationKey)}
published: ${published}
description: ''
image: ''
tags: []
category: ''
draft: false
lang: ${lang}
translationKey: ${JSON.stringify(pairedKey)}
slug: ${JSON.stringify(slug)}
---
`;

fs.writeFileSync(path.join(targetDir, fileName), content, { flag: "wx" });

console.log(
	`Post ${fullPath} created (${lang}). Write the ${lang === "en" ? "English" : "Chinese"} title and body before publishing.`,
);

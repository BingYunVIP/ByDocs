/* Create a timestamped dynamic markdown file from command-line text. */

import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "../src/config/siteConfig.ts";

const args = process.argv.slice(2);
let lang = "zh";
let requestedKey = "";
const text = [];
for (let i = 0; i < args.length; i++) {
	const arg = args[i];
	if (arg === "--") {
		text.push(...args.slice(i + 1));
		break;
	}
	if (arg === "--lang" || arg === "--key") {
		const value = args[++i];
		if (arg === "--lang") lang = value;
		else requestedKey = value;
	} else if (arg.startsWith("--lang=")) {
		lang = arg.slice(7);
	} else if (arg.startsWith("--key=")) {
		requestedKey = arg.slice(6);
	} else {
		text.push(arg);
	}
}
if (
	!["zh", "en"].includes(lang) ||
	(requestedKey && !/^\d{4}-\d{2}-\d{2}-\d{6}$/.test(requestedKey))
) {
	console.error(
		"Error: --lang must be zh or en; --key must use YYYY-MM-DD-HHmmss.",
	);
	process.exit(1);
}
const content = text.join(" ").trim();

if (!content) {
	console.error(
		"Error: No dynamic content provided\nUsage: pnpm new-dynamic [--lang zh|en] [--key YYYY-MM-DD-HHmmss] <content>",
	);
	process.exit(1);
}

const now = new Date();
const timezone = siteConfig.timezone || "Asia/Shanghai";
const dateParts = new Intl.DateTimeFormat("en-CA", {
	timeZone: timezone,
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hourCycle: "h23",
})
	.formatToParts(now)
	.reduce((parts, part) => {
		if (part.type !== "literal") parts[part.type] = part.value;
		return parts;
	}, {});
const year = dateParts.year;
const month = dateParts.month;
const day = dateParts.day;
const hours = dateParts.hour;
const minutes = dateParts.minute;
const seconds = dateParts.second;
let timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
const translationKey =
	requestedKey || `${year}-${month}-${day}-${hours}${minutes}${seconds}`;
const fileName = `${translationKey}-${lang}.md`;
const targetDir = path.resolve("src/content/dynamic");
const fullPath = path.join(targetDir, fileName);
const counterpart = path.join(
	targetDir,
	`${translationKey}-${lang === "zh" ? "en" : "zh"}.md`,
);
if (fs.existsSync(counterpart)) {
	const published = fs
		.readFileSync(counterpart, "utf8")
		.match(/^published:\s*(.+)$/m)?.[1];
	if (published) timestamp = published.trim();
}

fs.mkdirSync(targetDir, { recursive: true });

if (fs.existsSync(fullPath)) {
	console.error(`Error: File ${fullPath} already exists`);
	process.exit(1);
}

fs.writeFileSync(
	fullPath,
	`---\npublished: ${timestamp}\nlang: ${lang}\ntranslationKey: ${JSON.stringify(translationKey)}\nslug: ${JSON.stringify(translationKey)}\n---\n\n${content}\n`,
	{ flag: "wx" },
);

console.log(
	`Dynamic ${fullPath} created (${lang}); use --key ${translationKey} --lang ${lang === "zh" ? "en" : "zh"} to add its translation.`,
);

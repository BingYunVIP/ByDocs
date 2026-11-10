import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import { remarkExcerpt } from "./remark-excerpt.js";

const processor = await createMarkdownProcessor({
	syntaxHighlight: false,
	remarkPlugins: [remarkExcerpt],
});
const lines = (...values) => values.join(String.fromCharCode(10));

test("heading aliases stay in the document but never become excerpts", async () => {
	const result = await processor.render(
		lines(
			'<a id="原文" data-original-heading-id="原文" data-translated-heading-id="heading"></a>',
			"# Heading",
			"",
			"The first visible paragraph.",
		),
	);
	assert.equal(
		result.metadata.frontmatter.excerpt,
		"The first visible paragraph.",
	);
	assert.ok(result.code.includes('data-original-heading-id="原文"'));
});

test("inline formatting keeps its text without HTML markup", async () => {
	const result = await processor.render(
		"Hello <span>world</span>, **bold** and [linked](https://example.com) text.",
	);
	assert.equal(
		result.metadata.frontmatter.excerpt,
		"Hello world, bold and linked text.",
	);
});

test("empty markup paragraphs are skipped", async () => {
	const result = await processor.render(
		lines('<a id="one"></a>', "", '<a id="two"></a>', "", "Actual prose."),
	);
	assert.equal(result.metadata.frontmatter.excerpt, "Actual prose.");
});

test("code blocks do not become excerpts and image alt text is retained", async () => {
	const result = await processor.render(
		lines(
			"    console.log('code');",
			"",
			"![An example](https://example.com/image.png)",
		),
	);
	assert.equal(result.metadata.frontmatter.excerpt, "An example");
});

test("documents without a prose paragraph have an empty excerpt", async () => {
	const result = await processor.render(
		lines('<a id="heading"></a>', "# Heading"),
	);
	assert.equal(result.metadata.frontmatter.excerpt, "");
});

test("the actual English draft yields prose and retains its chapter alias", async () => {
	const source = await readFile(
		new URL("../content/posts/markdown/draft-en.md", import.meta.url),
		"utf8",
	);
	const body = source.split(lines("---", "")).slice(2).join(lines("---", ""));
	const result = await processor.render(body);
	assert.ok(
		result.metadata.frontmatter.excerpt.startsWith(
			"This post is currently a draft",
		),
	);
	assert.ok(
		result.code.includes('data-translated-heading-id="this-post-is-a-draft"'),
	);
});

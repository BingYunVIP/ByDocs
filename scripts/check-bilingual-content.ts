import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { glob } from "glob";
import matter from "gray-matter";
import { getLocaleFromPath, stripLocalePrefix, toLocalePath } from "../src/utils/locale";

for (const [input, expected] of [["/", "zh"], ["/en/", "en"], ["/en/posts/foo/", "en"], ["/english/", "zh"]]) assert.equal(getLocaleFromPath(input), expected);
assert.equal(toLocalePath("/posts/foo/?q=x#part", "en"), "/en/posts/foo/?q=x#part");
assert.equal(toLocalePath("/en/posts/foo/", "zh"), "/posts/foo/");
assert.equal(toLocalePath("/en?lang=zh", "zh"), "/?lang=zh");
for (const asset of ["/assets/a.png", "/favicon/logo.png", "/pagefind/pagefind.js", "https://example.com/path", "#part"]) assert.equal(toLocalePath(asset, "en"), asset);
assert.equal(stripLocalePrefix("/en/2/"), "/2/");
let pairs = 0;
for (const collection of ["posts", "spec", "dynamic", "projects"]) {
 const groups = new Map<string, Map<string, string>>();
 const urls = new Set<string>();
 for (const file of await glob("src/content/" + collection + "/**/*.{md,mdx}")) {
  const { data } = matter(fs.readFileSync(file, "utf8"));
  assert.ok(data.lang === "zh" || data.lang === "en", file);
  assert.ok(file.endsWith("-" + data.lang + path.extname(file)), file);
  assert.equal(typeof data.translationKey, "string", file);
  assert.equal(typeof data.slug, "string", file);
  const url = data.lang + "/" + data.slug; assert.ok(!urls.has(url), "Duplicate URL: " + url); urls.add(url);
  const group = groups.get(data.translationKey) || new Map<string, string>();
  assert.ok(!group.has(data.lang), "Duplicate pair: " + data.translationKey);
  group.set(data.lang, file); groups.set(data.translationKey, group);
 }
 for (const [key, group] of groups) { assert.ok(group.has("zh") && group.has("en"), "Current content missing translation: " + collection + "/" + key); pairs++; }
}
console.log("Locale path assertions and " + pairs + " bilingual content pairs PASS");

import { siteConfig } from "@/config/siteConfig";
export type Locale = "zh" | "en";
export const locales: readonly Locale[] = ["zh", "en"];
export function normalizeLocale(value?: string | null): Locale {
	return value?.toLowerCase().startsWith("zh") ? "zh" : "en";
}
export function getDefaultLocale(): Locale {
	const value = siteConfig.lang;
	return value?.toLowerCase().startsWith("zh") ? "zh" : value === "en" ? "en" : "zh";
}
export function getLocaleFromPath(pathname: string): Locale {
	return /^\/en(?:\/|$)/.test(pathname) ? "en" : "zh";
}
export function stripLocalePrefix(path: string): string {
	return path.replace(/^\/en(?=\/|[?#]|$)/, "") || "/";
}
export function toLocalePath(path: string, locale: Locale): string {
	if (!path || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(path)) return path;
	const rooted = path.startsWith("/") ? path : "/" + path;
	const stripped = stripLocalePrefix(rooted);
	const base = /^[?#]/.test(stripped) ? "/" + stripped : stripped;
	if (/^\/(?:assets|favicon|pagefind|pio|_astro|_image|images|fonts)(?:\/|[?]|$)/.test(base)) return base;
	if (/\.[a-z\d]+(?:[?#]|$)/i.test(base) && !/\.(?:xml|json|txt)(?:[?#]|$)/i.test(base)) return base;
	return locale === "en" ? "/en" + base : base;
}
export function getRouteAlternatesFallback(pathname: string): { zh: string; en: string } {
	return { zh: toLocalePath(pathname, "zh"), en: toLocalePath(pathname, "en") };
}
const englishConfigText: Record<string, string> = {
 "文档": "Documentation", "指南": "Guides", "计划中": "Planned",
 "支持博主": "Support the author", "支持一下": "Support",
 "如果您觉得本站内容对您有帮助，欢迎支持我们的创作！您的支持是我们持续更新的动力。": "If you find this site helpful, please support our work. Your support helps us keep publishing.",
	"冰云文档": "BingYun Docs", "使用教程": "Guides and Tutorials",
	"冰云": "BingYun", "文章示例": "Article Examples",
	"博客指南": "Blog Guides", "冰云小店": "Shop",
	"技术": "Technology", "开发中": "In development",
	"项目展示": "Projects", "关于冰云文档": "About BingYun Docs",
	"欢迎来到我的博客": "Welcome to my blog",
};
export function localizeConfigText(value: string | undefined, locale: Locale): string {
	return locale === "en" ? englishConfigText[value || ""] ?? value ?? "" : value ?? "";
}

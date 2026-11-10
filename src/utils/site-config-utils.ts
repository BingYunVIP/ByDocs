import type { SiteConfig } from "@/types/siteConfig";

// 站点语言的环境变量覆盖工具
// 把「读取 PUBLIC_SITE_LANG 环境变量并规整为合法语言」的逻辑收敛在这里，
// 让 siteConfig.ts 保持纯配置，不掺杂判断代码

// 读取站点语言环境变量（Vite/Astro 走 import.meta.env，构建脚本回退 process.env）
function readSiteLangEnv(): string | undefined {
	try {
		const raw = (import.meta.env as Record<string, unknown>).PUBLIC_SITE_LANG;
		return typeof raw === "string" && raw.trim() ? raw.trim() : undefined;
	} catch {
		return typeof process === "undefined"
			? undefined
			: process.env.PUBLIC_SITE_LANG;
	}
}

// 规整成 SiteConfig.lang 的合法取值，无法识别时返回 undefined（回退到默认值）
function normalizeSiteLang(
	value: string | undefined,
): SiteConfig["lang"] | undefined {
	if (!value) return undefined;
	const v = value.toLowerCase();
	if (v === "zh_cn" || v === "zh-cn") return "zh_CN";
	if (v === "zh_tw" || v === "zh-tw") return "zh_TW";
	if (v === "ja" || v === "ja_jp" || v === "ja-jp") return "ja";
	if (v === "ru" || v === "ru_ru" || v === "ru-ru") return "ru";
	if (v === "ko" || v === "ko_kr" || v === "ko-kr") return "ko";
	if (
		v === "en" ||
		v === "en_us" ||
		v === "en_gb" ||
		v === "en-us" ||
		v === "en-gb"
	) {
		return "en";
	}
	return undefined;
}

// 解析语言检测兜底：PUBLIC_SITE_LANG 优先，未设置或无效时使用 defaultLang。
// 仅影响无法读取浏览器语言时的默认选择，不控制所有访客的语言。
// 中英文页面始终同时生成，设置此值不会关闭另一种语言的构建。
export function resolveSiteLang(
	defaultLang: SiteConfig["lang"],
): SiteConfig["lang"] {
	return normalizeSiteLang(readSiteLangEnv()) ?? defaultLang;
}

// 由语言代码生成 OpenGraph og:locale（language_TERRITORY 格式）。
// 站点语言已是下划线形式（zh_CN/zh_TW/en/ja/ko/ru），仅需为无地区的语言补全区号。
export function getOgLocale(lang: string): string {
	switch (lang.toLowerCase().replace("-", "_")) {
		case "zh_cn":
			return "zh_CN";
		case "zh_tw":
			return "zh_TW";
		case "ja":
			return "ja_JP";
		case "ko":
			return "ko_KR";
		case "ru":
			return "ru_RU";
		default:
			return "en_US";
	}
}

export function getLocalizedSiteConfig<T extends SiteConfig>(config: T, locale: import("./locale").Locale): T {
	if (locale === "zh") return { ...config, navbar: { ...config.navbar }, lang: "zh_CN" };
	return { ...config,
		title: config.title === "冰云文档" ? "BingYun Docs" : config.title,
		subtitle: config.subtitle === "使用教程" ? "Guides and Tutorials" : config.subtitle,
		description: "BingYun documentation: practical guides for the BingYun API, AI image generation, residential IP services and ChatGPT accounts. Find setup instructions and troubleshooting advice here.",
		navbar: { ...config.navbar, title: config.navbar.title === "冰云文档" ? "BingYun Docs" : config.navbar.title },
		lang: "en",
	};
}

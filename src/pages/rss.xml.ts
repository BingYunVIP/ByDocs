import { getLocalizedSiteConfig } from "@/utils/site-config-utils";
import { getLocaleFromPath, toLocalePath } from "@/utils/locale";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import { getSortedPosts } from "@utils/content-utils";
import { formatDateI18nWithTime } from "@utils/date-utils";
import { renderFeedEntries } from "@utils/feed-utils";
import type { APIContext } from "astro";
import { siteConfig } from "@/config";
import pkg from "../../package.json";

export const prerender = true;

export async function GET(context: APIContext): Promise<Response> {
	const locale = getLocaleFromPath(context.url.pathname);
	const localizedSite = getLocalizedSiteConfig(siteConfig, locale);
	const includeContent = (siteConfig.feed?.contentMode ?? "full") === "full";
	const blog = await getSortedPosts(locale);
	const entries = await renderFeedEntries(blog, { includeContent });
	const feedItems: RSSFeedItem[] = entries.map((entry) => ({
		title: entry.title,
		pubDate: entry.published,
		description: entry.description,
		link: entry.link,
		...(includeContent ? { content: entry.content } : {}),
	}));
	return rss({
		title: locale === "en" ? "BingYun Docs" : siteConfig.title,
		description: localizedSite.subtitle || "No description",
		site: new URL(toLocalePath("/", locale), context.site ?? "https://firefly.cuteleaf.cn"),
		customData: `<templateTheme>Firefly</templateTheme>
		<templateThemeVersion>${pkg.version}</templateThemeVersion>
		<templateThemeUrl>https://github.com/CuteLeaf/Firefly</templateThemeUrl>
		<lastBuildDate>${formatDateI18nWithTime(new Date(), locale)}</lastBuildDate>`,
		items: feedItems,
	});
}

import { getLocalizedSiteConfig } from "@/utils/site-config-utils";
import { getLocaleFromPath, toLocalePath } from "@/utils/locale";
import { getSortedPosts } from "@utils/content-utils";
import { buildAtomFeed, renderFeedEntries } from "@utils/feed-utils";
import type { APIContext } from "astro";
import { profileConfig, siteConfig } from "@/config";
import pkg from "../../package.json";

export const prerender = true;

export async function GET(context: APIContext): Promise<Response> {
	const locale = getLocaleFromPath(context.url.pathname);
	const localizedSite = getLocalizedSiteConfig(siteConfig, locale);
	const includeContent = (siteConfig.feed?.contentMode ?? "full") === "full";
	const blog = await getSortedPosts(locale);
	const entries = await renderFeedEntries(blog, { includeContent });
	const site = context.site ?? new URL(siteConfig.site_url);
	const xml = buildAtomFeed({
		locale,
		site,
		title: locale === "en" ? "BingYun Docs" : siteConfig.title,
		subtitle: localizedSite.subtitle || localizedSite.description || "",
		entries,
		authorName: profileConfig.name,
		generator: `Firefly v${pkg.version}`,
		includeContent,
	});
	return new Response(xml, {
		headers: { "Content-Type": "application/atom+xml; charset=utf-8" },
	});
}

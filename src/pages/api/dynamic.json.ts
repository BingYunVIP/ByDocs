import { getLocalizedCollection } from "@/utils/localized-content";
import type { APIContext } from "astro";
import { getLocaleFromPath, toLocalePath } from "@/utils/locale";
import { getCollection } from "astro:content";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import {
	dynamicSearchText,
	dynamicSlug,
	sortDynamics,
} from "@/utils/dynamic-utils";

const markdownImagePattern = /!\[([^\]]*)\]\((\S+?)(?:\s+["']([^"']*)["'])?\)/g;

export async function GET(context: APIContext): Promise<Response> {
	const locale = getLocaleFromPath(context.url.pathname);
	const processor = await createMarkdownProcessor();
	const dynamics = sortDynamics(await getLocalizedCollection("dynamic", locale));
	const data = await Promise.all(
		dynamics.map(async (entry) => {
			const images: Array<{ alt: string; src: string; title?: string }> = [];
			const markdown = (entry.data.translationMissing ? "Translation unavailable. Read the Chinese original." : entry.body || "").replace(
				markdownImagePattern,
				(_match, alt: string, src: string, title?: string) => {
					images.push({ alt, src, ...(title ? { title } : {}) });
					return "";
				},
			);
			const rendered = await processor.render(markdown);

			return {
				id: dynamicSlug(entry.id),
			...(entry.data.translationMissing ? { translationMissing: true, originalUrl: "/dynamic/?lang=zh#dynamic-" + dynamicSlug(entry.id) } : {}),
				published: entry.data.published.getTime(),
			html: entry.data.translationMissing ? rendered.code + '<p><a href="/dynamic/?lang=zh#dynamic-' + encodeURIComponent(dynamicSlug(entry.id)) + '">Read the Chinese original</a></p>' : rendered.code,
				images,
				searchText: entry.data.translationMissing ? "translation unavailable chinese only" : dynamicSearchText(entry),
				pinned: entry.data.pinned || false,
				location: entry.data.location.trim(),
			};
		}),
	);

	return new Response(JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
}

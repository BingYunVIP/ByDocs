// biome-ignore lint/suspicious/noShadowRestrictedNames: <toString from mdast-util-to-string>
import { toString } from "mdast-util-to-string";

/* Use the post's first paragraph as the excerpt */
export function remarkExcerpt({ includeHtml = false } = {}) {
	return (tree, { data }) => {
		let excerpt = "";
		for (const node of tree.children) {
			if (node.type !== "paragraph") {
				continue;
			}
			// Heading aliases and other markup are not visible excerpt text.
			excerpt = toString(node, { includeHtml }).trim();
			if (!excerpt) continue;
			break;
		}
		data.astro.frontmatter.excerpt = excerpt;
	};
}

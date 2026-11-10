import { existsSync } from "node:fs";
import { defineCollection } from "astro:content";
import type { CollectionConfig } from "astro/content/config";
import { glob } from "astro/loaders";
import { type ZodType, z } from "astro/zod";

type LocalizedData = {
	translationMissing?: boolean;
	lang: "zh" | "en";
	translationKey: string;
	slug: string;
};

type PostData = LocalizedData & {
	title: string;
	published: Date;
	updated?: Date;
	draft: boolean;
	description: string;
	image: string;
	tags: string[];
	category: string | null;
	pinned: boolean;
	author: string;
	sourceLink: string;
	licenseName: string;
	licenseUrl: string;
	comment: boolean;
	password: string;
	passwordHint: string;
	series: string;
	seriesOrder?: number;
	prevTitle: string;
	prevSlug: string;
	nextTitle: string;
	nextSlug: string;
};

type DynamicData = LocalizedData & {
	published: Date;
	pinned: boolean;
	location: string;
};

type ProjectLink = {
	label: string;
	icon: string;
	value: string;
};

type ProjectData = LocalizedData & {
	title: string;
	published: Date;
	draft: boolean;
	order?: number;
	description: string;
	image: string;
	tags: string[];
	link: ProjectLink[];
	status: string;
};

type ContentCollection<T> = CollectionConfig<
	ZodType<T>,
	ReturnType<typeof glob>
>;

const localizedFields = {
	translationMissing: z.boolean().optional(),
	lang: z.enum(["zh", "en"]),
	translationKey: z.string().min(1),
	slug: z.string().min(1),
};
function localizedLoader(collection: string) {
	const ids = new Map<string, string>();
	const pairs = new Map<string, string>();
	return glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/" + collection,
		generateId: ({ entry, data }) => {
			const suffix = entry.match(/-(zh|en)\.(?:md|mdx)$/)?.[1];
			if (!suffix || data.lang !== suffix || typeof data.translationKey !== "string" || !data.translationKey) throw new Error(collection + "/" + entry + ": expected matching -zh/-en filename, lang and translationKey");
			const slug = typeof data.slug === "string" && data.slug ? data.slug : entry.replace(/-(?:zh|en)\.(?:md|mdx)$/, "");
			const id = suffix + "/" + slug;
			const pair = suffix + "/" + data.translationKey;
			// Editing a file must release its previous public slug and group key.
		for (const map of [ids, pairs]) {
			for (const [key, owner] of map) {
				if (owner === entry) map.delete(key);
			}
		}
		for (const [map, key] of [[ids, id], [pairs, pair]] as const) {
				const previous = map.get(key);
				if (previous && previous !== entry && existsSync("./src/content/" + collection + "/" + previous)) throw new Error("Duplicate localized content " + collection + "/" + key + ": " + previous + ", " + entry);
				map.set(key, entry);
			}
			return id;
		},
	});
}

const postsCollection: ContentCollection<PostData> = defineCollection({
	loader: localizedLoader("posts"),
	schema: z.object({
		...localizedFields,
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		pinned: z.boolean().optional().default(false),
		author: z.string().optional().default(""),
		sourceLink: z.string().optional().default(""),
		licenseName: z.string().optional().default(""),
		licenseUrl: z.string().optional().default(""),
		comment: z.boolean().optional().default(true),
		password: z.string().optional().default(""),
		passwordHint: z.string().optional().default(""),
		series: z.string().optional().default(""),
		seriesOrder: z.number().optional(),

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});

const specCollection: ContentCollection<LocalizedData> =
	defineCollection({
		loader: localizedLoader("spec"),
		schema: z.object({
		...localizedFields,}),
	});

const dynamicCollection: ContentCollection<DynamicData> = defineCollection({
	loader: localizedLoader("dynamic"),
	schema: z.object({
		...localizedFields,
		published: z.date(),
		pinned: z.boolean().optional().default(false),
		location: z.string().optional().default(""),
	}),
});

const projectsCollection: ContentCollection<ProjectData> = defineCollection({
	loader: localizedLoader("projects"),
	schema: z.object({
		...localizedFields,
		title: z.string(),
		published: z.date(),
		draft: z.boolean().optional().default(false),
		order: z.number().optional(),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		link: z
			.array(
				z.object({
					label: z.string(),
					icon: z.string().optional().default(""),
					value: z.string(),
				}),
			)
			.optional()
			.default([]),
		status: z.string().optional().default(""),
	}),
});

export const collections: {
	dynamic: typeof dynamicCollection;
	posts: typeof postsCollection;
	spec: typeof specCollection;
	projects: typeof projectsCollection;
} = {
	dynamic: dynamicCollection,
	posts: postsCollection,
	spec: specCollection,
	projects: projectsCollection,
};

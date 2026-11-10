import { getCollection, type CollectionEntry, type CollectionKey } from "astro:content";
import { getLocaleFromPath, stripLocalePrefix, toLocalePath, type Locale } from "./locale";
export async function getLocalizedCollection<C extends CollectionKey>(collection: C, locale: Locale): Promise<CollectionEntry<C>[]> {
 const all = await getCollection(collection);
 const selected = all.filter((entry) => entry.data.lang === locale);
 if (locale === "en") {
  const keys = new Set(selected.map((entry) => entry.data.translationKey));
  for (const source of all.filter((entry) => entry.data.lang === "zh")) {
   if (!keys.has(source.data.translationKey)) selected.push({ ...source, id: source.id.replace(/^zh\//, "en/"), data: { ...source.data, lang: "en", translationMissing: true, description: "Available in Chinese only", title: "Chinese only: " + ("title" in source.data ? source.data.title : source.data.slug) } } as CollectionEntry<C>);
  }
 }
 return selected;
}
export async function getRouteAlternates(pathname: string): Promise<{ zh: string; en: string }> {
 const match = stripLocalePrefix(pathname).match(/^\/(posts|projects)\/(.+?)\/?$/);
 const result = { zh: toLocalePath(pathname, "zh"), en: toLocalePath(pathname, "en") };
 if (!match) {
  const page = stripLocalePrefix(pathname).match(/^\/(\d+)\/?$/);
  if (page) {
   const { siteConfig } = await import("@/config");
   for (const locale of ["zh", "en"] as const) {
    const posts = (await getLocalizedCollection("posts", locale)).filter(entry => !import.meta.env.PROD || !entry.data.draft);
    if (Number(page[1]) > Math.max(1, Math.ceil(posts.length / siteConfig.pagination.postsPerPage))) result[locale] = toLocalePath("/", locale);
   }
  }
  return result;
 }
 const all = await getCollection(match[1] === "posts" ? "posts" : "projects");
 const current = all.find((entry) => entry.data.slug === match[2] && entry.data.lang === getLocaleFromPath(pathname));
 for (const locale of ["zh", "en"] as const) {
  const other = all.find((entry) => current && entry.data.translationKey === current.data.translationKey && entry.data.lang === locale);
  if (other) result[locale] = toLocalePath("/" + match[1] + "/" + other.data.slug + "/", locale);
 }
 return result;
}
export async function getLocalizedEntry<C extends CollectionKey>(collection: C, slug: string, locale: Locale): Promise<CollectionEntry<C> | undefined> {
 return (await getLocalizedCollection(collection, locale)).find((entry) => entry.data.slug === slug || entry.data.translationKey === slug);
}

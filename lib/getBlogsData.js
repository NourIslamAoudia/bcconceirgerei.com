import blogsFr from "@/blogs_data-fr.json";
import blogsEn from "@/blogs_data-en.json";

/**
 * Returns blog data for the given locale.
 * Falls back to French if locale is not recognized.
 */
export function getBlogsData(locale) {
  return locale === "en" ? blogsEn : blogsFr;
}

/**
 * Returns all slugs from both locales (for generateStaticParams).
 */
export function getAllBlogSlugs() {
  const frSlugs = blogsFr.blogs.map((b) => b.slug);
  const enSlugs = blogsEn.blogs.map((b) => b.slug);
  return [...new Set([...frSlugs, ...enSlugs])];
}

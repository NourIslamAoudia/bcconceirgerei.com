import blogsFr from "@/blogs_data-fr.json";
import blogsEn from "@/blogs_data-en.json";

/**
 * Removes hidden articles ("masquer": true) so they are not listed,
 * not routable and not included in the sitemap.
 */
function withVisibleBlogs(data) {
  return { ...data, blogs: data.blogs.filter((b) => !b.masquer) };
}

const visibleFr = withVisibleBlogs(blogsFr);
const visibleEn = withVisibleBlogs(blogsEn);

/**
 * Returns visible blog data for the given locale.
 * Falls back to French if locale is not recognized.
 */
export function getBlogsData(locale) {
  return locale === "en" ? visibleEn : visibleFr;
}

/**
 * Returns all visible slugs from both locales (for generateStaticParams).
 */
export function getAllBlogSlugs() {
  const frSlugs = visibleFr.blogs.map((b) => b.slug);
  const enSlugs = visibleEn.blogs.map((b) => b.slug);
  return [...new Set([...frSlugs, ...enSlugs])];
}

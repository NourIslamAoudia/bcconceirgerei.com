import blogsFr from "@/blogs_data-fr.json";
import blogsEn from "@/blogs_data-en.json";

/**
 * Removes hidden articles ("masquer": true) so they are not listed,
 * not routable and not included in the sitemap. Newest articles first.
 */
function withVisibleBlogs(data) {
  const blogs = data.blogs
    .filter((b) => !b.masquer)
    .sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);
  return { ...data, blogs };
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
 * Returns the visible slugs of one locale (for generateStaticParams).
 */
export function getBlogSlugs(locale) {
  return getBlogsData(locale).blogs.map((b) => b.slug);
}

/**
 * Returns up to `count` other articles, preferring the same category.
 */
export function getRelatedBlogs(locale, blog, count = 3) {
  const others = getBlogsData(locale).blogs.filter((b) => b.slug !== blog.slug);
  const sameCategory = others.filter((b) => b.category === blog.category);
  const rest = others.filter((b) => b.category !== blog.category);
  return [...sameCategory, ...rest].slice(0, count);
}

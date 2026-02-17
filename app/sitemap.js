import { getBlogsData, getAllBlogSlugs } from "@/lib/getBlogsData";
import { getAlternateBlogSlug } from "@/lib/blogSlugMap";

export default function sitemap() {
  const baseUrl = "https://www.bcconciergerie.com";
  const currentDate = new Date().toISOString();
  const locales = ["fr", "en"];

  const pages = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/offres", changeFrequency: "monthly", priority: 0.8 },
    { path: "/a-propos", changeFrequency: "monthly", priority: 0.5 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  ];

  const entries = [];

  // Static pages
  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: currentDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${page.path}`,
            en: `${baseUrl}/en${page.path}`,
          },
        },
      });
    }
  }

  // Blog article pages
  for (const locale of locales) {
    const blogsData = getBlogsData(locale);
    for (const blog of blogsData.blogs) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${blog.slug}`,
        lastModified: blog.date || currentDate,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr/blog/${getAlternateBlogSlug(blog.slug, locale, "fr")}`,
            en: `${baseUrl}/en/blog/${getAlternateBlogSlug(blog.slug, locale, "en")}`,
          },
        },
      });
    }
  }

  return entries;
}

import { getBlogsData } from "@/lib/getBlogsData";
import { getAlternateBlogSlug } from "@/lib/blogSlugMap";
import { SITE_URL, LOCALES, DEFAULT_LOCALE } from "@/lib/seo";

export default function sitemap() {
  const pages = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/services", changeFrequency: "monthly", priority: 0.9 },
    { path: "/offres", changeFrequency: "monthly", priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    { path: "/a-propos", changeFrequency: "monthly", priority: 0.6 },
  ];

  // Most recent visible article date = last content update of the site
  const latestBlogDate = LOCALES.flatMap((l) => getBlogsData(l).blogs)
    .map((b) => b.date)
    .sort()
    .at(-1);

  const entries = [];

  // Static pages
  for (const page of pages) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}/${locale}${page.path}`,
        lastModified: latestBlogDate,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: {
            fr: `${SITE_URL}/fr${page.path}`,
            en: `${SITE_URL}/en${page.path}`,
            "x-default": `${SITE_URL}/${DEFAULT_LOCALE}${page.path}`,
          },
        },
      });
    }
  }

  // Blog article pages
  for (const locale of LOCALES) {
    for (const blog of getBlogsData(locale).blogs) {
      const frSlug = getAlternateBlogSlug(blog.slug, locale, "fr");
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${blog.slug}`,
        lastModified: blog.date,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            fr: `${SITE_URL}/fr/blog/${frSlug}`,
            en: `${SITE_URL}/en/blog/${getAlternateBlogSlug(blog.slug, locale, "en")}`,
            "x-default": `${SITE_URL}/fr/blog/${frSlug}`,
          },
        },
      });
    }
  }

  return entries;
}

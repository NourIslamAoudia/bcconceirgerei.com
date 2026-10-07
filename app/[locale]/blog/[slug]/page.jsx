import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogsData, getBlogSlugs, getRelatedBlogs } from "@/lib/getBlogsData";
import { getAlternateBlogSlug } from "@/lib/blogSlugMap";
import {
  SITE_URL,
  SITE_NAME,
  OG_IMAGE,
  ORGANIZATION_ID,
  WEBSITE_ID,
  ogLocale,
  jsonLdScriptProps,
} from "@/lib/seo";
import "../blog.css";

export const dynamicParams = false;

export async function generateStaticParams({ params }) {
  const { locale } = params;
  return getBlogSlugs(locale).map((slug) => ({ slug }));
}

function findBlog(locale, slug) {
  return getBlogsData(locale).blogs.find((b) => b.slug === slug);
}

/**
 * Renders plain-text article content as semantic HTML: blank lines split
 * paragraphs, consecutive "- " lines become a bullet list.
 */
function RichText({ text, className }) {
  const blocks = text.split(/\n{2,}/);
  return (
    <div className={className}>
      {blocks.map((block, i) => {
        const lines = block.split("\n");
        const items = lines.filter((l) => l.startsWith("- "));
        if (items.length === 0) {
          return <p key={i}>{block}</p>;
        }
        const lead = lines.filter((l) => !l.startsWith("- ")).join("\n");
        return (
          <div key={i}>
            {lead && <p>{lead}</p>}
            <ul>
              {items.map((item, j) => (
                <li key={j}>{item.slice(2)}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const blog = findBlog(locale, slug);

  if (!blog) {
    return { title: "Article introuvable", robots: { index: false } };
  }

  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const frSlug = getAlternateBlogSlug(slug, locale, "fr");
  const enSlug = getAlternateBlogSlug(slug, locale, "en");

  return {
    title: `${blog.title} | ${SITE_NAME}`,
    description: blog.excerpt,
    keywords: blog.tags,
    authors: [{ name: blog.author, url: SITE_URL }],
    alternates: {
      canonical: url,
      languages: {
        fr: `${SITE_URL}/fr/blog/${frSlug}`,
        en: `${SITE_URL}/en/blog/${enSlug}`,
        "x-default": `${SITE_URL}/fr/blog/${frSlug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: ogLocale(locale),
      url,
      title: blog.title,
      description: blog.excerpt,
      siteName: SITE_NAME,
      publishedTime: blog.date,
      modifiedTime: blog.updated || blog.date,
      authors: [blog.author],
      section: blog.category,
      tags: blog.tags,
      images: [{ ...OG_IMAGE, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { locale, slug } = await params;
  const blog = findBlog(locale, slug);
  const isEn = locale === "en";

  if (!blog) {
    notFound();
  }

  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const related = getRelatedBlogs(locale, blog);
  const wordCount = [
    blog.content.introduction,
    ...blog.content.sections.flatMap((s) => [s.title, s.content]),
    ...(blog.content.faq || []).flatMap((f) => [f.question, f.answer]),
  ]
    .join(" ")
    .split(/\s+/).length;

  const { content } = blog;

  // JSON-LD BlogPosting structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: blog.title,
    description: blog.excerpt,
    image: OG_IMAGE.url,
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: blog.author,
      url: SITE_URL,
    },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
    datePublished: blog.date,
    dateModified: blog.updated || blog.date,
    keywords: blog.tags.join(", "),
    articleSection: blog.category,
    wordCount,
    inLanguage: locale,
  };

  // JSON-LD BreadcrumbList
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: isEn ? "Home" : "Accueil",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/${locale}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `${url}`,
      },
    ],
  };

  // JSON-LD FAQPage (if FAQ exists)
  const faqJsonLd =
    content.faq && content.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div className="blog-detail-page">
      <script {...jsonLdScriptProps(jsonLd)} />
      <script {...jsonLdScriptProps(breadcrumbJsonLd)} />
      {faqJsonLd && (
        <script {...jsonLdScriptProps(faqJsonLd)} />
      )}

      {/* Hero */}
      <section className="blog-detail-hero">
        <div className="blog-detail-hero-content">
          <nav className="blog-detail-breadcrumb">
            <Link href={`/${locale}`}>{isEn ? "Home" : "Accueil"}</Link>
            <span>/</span>
            <Link href={`/${locale}/blog`}>Blog</Link>
            <span>/</span>
            <span className="current">
              {blog.title.length > 50
                ? blog.title.substring(0, 50) + "…"
                : blog.title}
            </span>
          </nav>

          <div className="blog-detail-meta">
            <span className="blog-detail-category">{blog.category}</span>
            <span className="blog-detail-dot" />
            <time className="blog-detail-date" dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString(
                locale === "en" ? "en-GB" : "fr-FR",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            </time>
            <span className="blog-detail-dot" />
            <span className="blog-detail-readtime">{blog.readTime}</span>
          </div>

          <h1 className="blog-detail-title">{blog.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="blog-detail-content">
        {/* Introduction */}
        <RichText className="blog-introduction" text={content.introduction} />

        {/* Sections */}
        {content.sections.map((section, index) => (
          <section key={index} className="blog-section">
            <h2 className="blog-section-title">{section.title}</h2>
            <RichText className="blog-section-content" text={section.content} />
          </section>
        ))}

        {/* FAQ */}
        {content.faq && content.faq.length > 0 && (
          <section className="blog-faq">
            <h2 className="blog-faq-title">
              {isEn ? "Frequently Asked Questions" : "Questions fréquentes"}
            </h2>
            {content.faq.map((item, index) => (
              <div key={index} className="blog-faq-item">
                <h3 className="blog-faq-question">{item.question}</h3>
                <p className="blog-faq-answer">{item.answer}</p>
              </div>
            ))}
          </section>
        )}

        {/* CTA */}
        {content.cta && (
          <div className="blog-cta">
            <h3 className="blog-cta-title">{content.cta.title}</h3>
            <p className="blog-cta-description">{content.cta.description}</p>
            <p className="blog-cta-action">{content.cta.action}</p>
            <a
              href="https://wa.me/+33774061322"
              target="_blank"
              rel="noopener noreferrer"
              className="blog-cta-button"
            >
              {isEn ? "Contact us" : "Contactez-nous"}
            </a>
          </div>
        )}

        {/* Related articles (internal linking) */}
        {related.length > 0 && (
          <nav
            className="blog-related"
            aria-label={isEn ? "Related articles" : "Articles similaires"}
          >
            <h2 className="blog-related-title">
              {isEn ? "Related articles" : "À lire aussi"}
            </h2>
            <ul className="blog-related-list">
              {related.map((r) => (
                <li key={r.slug} className="blog-related-item">
                  <Link href={`/${locale}/blog/${r.slug}`}>
                    <span className="blog-related-category">{r.category}</span>
                    <span className="blog-related-name">{r.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="blog-related-services">
              {isEn
                ? "Want to delegate your rental? Discover our "
                : "Vous souhaitez déléguer votre location ? Découvrez nos "}
              <Link href={`/${locale}/services`}>
                {isEn
                  ? "Airbnb concierge services in Nice"
                  : "services de conciergerie Airbnb à Nice"}
              </Link>
              {isEn ? " and our " : " et nos "}
              <Link href={`/${locale}/offres`}>
                {isEn ? "management offers" : "offres de gestion"}
              </Link>
              .
            </p>
          </nav>
        )}

        {/* Author */}
        <div className="blog-author">
          <span>{isEn ? "Written by" : "Rédigé par"}</span>
          <strong>{blog.author}</strong>
        </div>

        {/* Back link */}
        <Link href={`/${locale}/blog`} className="blog-back-link">
          ← {isEn ? "Back to all articles" : "Retour aux articles"}
        </Link>
      </article>
    </div>
  );
}

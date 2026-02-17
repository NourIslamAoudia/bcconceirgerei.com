import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogsData, getAllBlogSlugs } from "@/lib/getBlogsData";
import "../blog.css";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const blogsData = getBlogsData(locale);
  const blog = blogsData.blogs.find((b) => b.slug === slug);

  if (!blog) {
    return { title: "Article introuvable" };
  }

  return {
    title: `${blog.title} | B&C Conciergerie`,
    description: blog.excerpt,
    keywords: blog.tags,
    authors: [{ name: blog.author }],
    alternates: {
      canonical: `https://www.bcconciergerie.com/${locale}/blog/${slug}`,
      languages: {
        fr: `https://www.bcconciergerie.com/fr/blog/${slug}`,
        en: `https://www.bcconciergerie.com/en/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: locale === "en" ? "en_GB" : "fr_FR",
      url: `https://www.bcconciergerie.com/${locale}/blog/${slug}`,
      title: blog.title,
      description: blog.excerpt,
      siteName: "B&C Conciergerie",
      publishedTime: blog.date,
      modifiedTime: blog.date,
      authors: [blog.author],
      tags: blog.tags,
      images: [
        {
          url: "https://www.bcconciergerie.com/icon_new.png",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: ["https://www.bcconciergerie.com/icon_new.png"],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { locale, slug } = await params;
  const blogsData = getBlogsData(locale);
  const blog = blogsData.blogs.find((b) => b.slug === slug);
  const isEn = locale === "en";

  if (!blog) {
    notFound();
  }

  const { content } = blog;

  // JSON-LD BlogPosting structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.bcconciergerie.com/${locale}/blog/${slug}`,
    },
    headline: blog.title,
    description: blog.excerpt,
    image: "https://www.bcconciergerie.com/icon_new.png",
    author: {
      "@type": "Organization",
      name: blog.author,
      url: "https://www.bcconciergerie.com",
    },
    datePublished: blog.date,
    dateModified: blog.date,
    keywords: blog.tags.join(", "),
    inLanguage: locale === "en" ? "en" : "fr",
    publisher: {
      "@type": "Organization",
      name: "B&C Conciergerie",
      url: "https://www.bcconciergerie.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.bcconciergerie.com/icon_new.png",
      },
    },
    articleSection: blog.category,
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
        item: `https://www.bcconciergerie.com/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `https://www.bcconciergerie.com/${locale}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://www.bcconciergerie.com/${locale}/blog/${slug}`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
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
            <span className="blog-detail-date">
              {new Date(blog.date).toLocaleDateString(
                locale === "en" ? "en-GB" : "fr-FR",
                { year: "numeric", month: "long", day: "numeric" },
              )}
            </span>
            <span className="blog-detail-dot" />
            <span className="blog-detail-readtime">{blog.readTime}</span>
          </div>

          <h1 className="blog-detail-title">{blog.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="blog-detail-content">
        {/* Introduction */}
        <div className="blog-introduction">{content.introduction}</div>

        {/* Sections */}
        {content.sections.map((section, index) => (
          <section key={index} className="blog-section">
            <h2 className="blog-section-title">{section.title}</h2>
            <div className="blog-section-content">{section.content}</div>
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

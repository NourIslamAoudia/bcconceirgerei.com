import Link from "next/link";
import { getBlogsData } from "@/lib/getBlogsData";
import { getTranslations } from "@/lib/getTranslations";
import "./blog.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Blog - Airbnb Management Tips | B&C Conciergerie Côte d'Azur"
      : "Blog - Conseils Gestion Airbnb | B&C Conciergerie Côte d'Azur",
    description: isEn
      ? "Expert tips and guides for Airbnb owners in Nice. Regulations, profitability, management and optimization of your short-term rental on the French Riviera."
      : "Conseils et guides experts pour propriétaires Airbnb à Nice. Réglementation, rentabilité, gestion et optimisation de votre location saisonnière sur la Côte d'Azur.",
    keywords: isEn
      ? [
          "airbnb nice blog",
          "rental management tips",
          "short-term rental guide",
          "nice regulations airbnb",
          "airbnb profitability",
        ]
      : [
          "blog airbnb nice",
          "conseils gestion locative",
          "guide location saisonnière",
          "réglementation airbnb nice",
          "rentabilité airbnb",
        ],
    openGraph: {
      type: "website",
      locale: isEn ? "en_GB" : "fr_FR",
      url: `https://www.bcconciergerie.com/${locale}/blog`,
      title: isEn
        ? "Blog - Airbnb Management Tips | B&C Conciergerie"
        : "Blog - Conseils Gestion Airbnb | B&C Conciergerie",
      description: isEn
        ? "Expert tips and guides for Airbnb owners on the French Riviera."
        : "Conseils et guides experts pour propriétaires Airbnb sur la Côte d'Azur.",
      siteName: "B&C Conciergerie",
      images: [
        {
          url: "https://www.bcconciergerie.com/icon_new.png",
          width: 1200,
          height: 630,
          alt: "B&C Conciergerie Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isEn
        ? "Blog - Airbnb Tips | B&C Conciergerie"
        : "Blog - Conseils Airbnb | B&C Conciergerie",
      description: isEn
        ? "Expert tips for Airbnb owners on the French Riviera."
        : "Conseils experts pour propriétaires Airbnb sur la Côte d'Azur.",
      images: ["https://www.bcconciergerie.com/icon_new.png"],
    },
    alternates: {
      canonical: `https://www.bcconciergerie.com/${locale}/blog`,
      languages: {
        fr: "https://www.bcconciergerie.com/fr/blog",
        en: "https://www.bcconciergerie.com/en/blog",
      },
    },
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const blogsData = getBlogsData(locale);
  const blogs = blogsData.blogs;
  const isEn = locale === "en";

  // JSON-LD CollectionPage structured data
  const blogListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: isEn ? "B&C Conciergerie Blog" : "Blog B&C Conciergerie",
    description: isEn
      ? "Expert tips and guides for Airbnb owners on the French Riviera"
      : "Conseils et guides experts pour propriétaires Airbnb sur la Côte d'Azur",
    url: `https://www.bcconciergerie.com/${locale}/blog`,
    publisher: {
      "@type": "Organization",
      name: "B&C Conciergerie",
      url: "https://www.bcconciergerie.com",
      logo: "https://www.bcconciergerie.com/icon_new.png",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.bcconciergerie.com/${locale}/blog/${blog.slug}`,
        name: blog.title,
      })),
    },
  };

  return (
    <div className="blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />

      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">
            {isEn ? "Our Blog" : "Notre Blog"}
          </h1>
          <p className="blog-hero-subtitle">
            {isEn
              ? "Expert tips and guides for Airbnb owners on the French Riviera"
              : "Conseils et guides experts pour propriétaires Airbnb sur la Côte d'Azur"}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="blog-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-card">
              <div className="blog-card-header">
                <div className="blog-card-meta">
                  <span className="blog-card-category">{blog.category}</span>
                  <span className="blog-card-dot" />
                  <span className="blog-card-date">
                    {new Date(blog.date).toLocaleDateString(
                      locale === "en" ? "en-GB" : "fr-FR",
                      { year: "numeric", month: "long", day: "numeric" },
                    )}
                  </span>
                  <span className="blog-card-dot" />
                  <span className="blog-card-readtime">{blog.readTime}</span>
                </div>
                <h2 className="blog-card-title">{blog.title}</h2>
              </div>

              <div className="blog-card-body">
                <p className="blog-card-excerpt">{blog.excerpt}</p>
              </div>

              <div className="blog-card-tags">
                {blog.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="blog-tag">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="blog-card-footer">
                <Link
                  href={`/${locale}/blog/${blog.slug}`}
                  className="blog-card-link"
                >
                  {isEn ? "Read more" : "Lire l'article"}
                  <span className="blog-card-link-arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

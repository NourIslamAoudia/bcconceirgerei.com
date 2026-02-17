import Link from "next/link";
import { getBlogsData } from "@/lib/getBlogsData";
import "./BlogSection.css";

/**
 * BlogSection Component — SERVER COMPONENT
 * Displays the latest blog posts on the home page with a "See more" button.
 * All text is passed as props from the server page for SSR/SEO.
 */
export default function BlogSection({ locale, translations: t }) {
  const blogsData = getBlogsData(locale);
  const blogs = blogsData.blogs.slice(0, 3);
  const isEn = locale === "en";

  return (
    <section className="blog-home-section">
      <div className="blog-home-container">
        {/* Header */}
        <div className="blog-home-header">
          <span className="blog-home-badge">{t.badge}</span>
          <h2 className="blog-home-title">{t.title}</h2>
          <p className="blog-home-subtitle">{t.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="blog-home-grid">
          {blogs.map((blog) => (
            <article key={blog.id} className="blog-home-card">
              <div className="blog-home-card-inner">
                <div className="blog-home-card-meta">
                  <span className="blog-home-card-category">
                    {blog.category}
                  </span>
                  <span className="blog-home-card-readtime">
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="blog-home-card-title">{blog.title}</h3>
                <p className="blog-home-card-excerpt">{blog.excerpt}</p>
              </div>
              <div className="blog-home-card-footer">
                <Link
                  href={`/${locale}/blog/${blog.slug}`}
                  className="blog-home-card-link"
                >
                  {isEn ? "Read more" : "Lire l'article"}
                  <span className="blog-home-card-link-arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* See More Button */}
        <div className="blog-home-cta">
          <Link href={`/${locale}/blog`} className="blog-home-button">
            {t.button}
            <span className="blog-home-button-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

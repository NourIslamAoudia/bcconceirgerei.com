# SEO & SSR Report — BC Conciergerie

## Stack Overview

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| React | v19 |
| Rendering | SSG + SSR hybrid |
| Styling | Tailwind CSS |
| Deployment | Vercel (standalone) |
| Languages | French (fr), English (en) |

---

## Server-Side Rendering & Static Generation

### How it works

The app uses **Static Site Generation (SSG)** as its primary rendering strategy, maximizing SEO performance by pre-rendering all pages at build time.

**`generateStaticParams`** is used in two places:

1. **`/app/[locale]/layout.jsx`** — Pre-generates routes for all supported locales (`fr`, `en`)
2. **`/app/[locale]/blog/[slug]/page.jsx`** — Pre-generates every blog article page for both locales

**`generateMetadata`** is used for dynamic, per-page metadata:
- Homepage: locale-aware title, description, canonical URL, hreflang
- Blog articles: per-article OpenGraph tags, title, description, structured data

**Result**: Every page is delivered as pre-rendered HTML — fast, indexable, no JavaScript required by crawlers.

---

## Points Forts SEO (Strengths)

### 1. Metadata & Tags
- Root `metadata` export with full OpenGraph and Twitter Card setup
- Dynamic `generateMetadata()` on homepage and all blog pages
- `metadataBase` correctly configured for canonical URL generation
- `robots` meta set to `index: true, follow: true` on all pages

### 2. Hreflang & Internationalization
- `alternates.languages` configured with `fr`, `en`, and `x-default`
- Locale-prefixed URLs (`/fr/`, `/en/`) for clean language segmentation
- Blog articles have slug-mapped alternates across both languages
- Correct `canonical` URL per page, per locale

### 3. Structured Data (JSON-LD)
Multiple rich schema types implemented:

| Schema | Where |
|---|---|
| `LocalBusiness` | Root layout |
| `RealEstateAgent` | Root layout |
| `FAQPage` | Root layout |
| `WebSite` + `WebPage` | Homepage |
| `BlogPosting` | Blog article pages |
| `BreadcrumbList` | Blog article pages |

All schemas include multilingual fields and geo coordinates (Nice, 43.7102, 7.2620).

### 4. Sitemap & Robots
- **`sitemap.js`**: Dynamically generates a complete XML sitemap including all static pages × 2 locales + all blog articles with `hreflang` alternates, `changeFrequency`, and `priority`
- **`robots.js`**: Blocks `/admin/`, `/private/`, `/api/` — exposes sitemap URL to crawlers

### 5. Performance (Core Web Vitals)
- **AVIF + WebP** image formats with 1-year cache TTL
- **Critical CSS inlining** via Critters
- **Font display: swap** with preconnect to Google Fonts
- **Non-blocking analytics** via `afterInteractive` script strategy
- **DNS-prefetch headers** configured
- `removeConsole` enabled in production builds
- `X-Powered-By` header removed
- HSTS + Referrer-Policy headers set

### 6. PWA & Discoverability
- `manifest.json` with icon, theme color, and display mode
- Favicon set properly in `/public/`
- OpenGraph image configured for link previews

---
## Things to Enhance

### High Priority

- **Missing alt text audit** — Verify all `<img>` and `next/image` usages have meaningful, keyword-rich `alt` attributes (not just filenames or empty strings)
- **Blog content depth** — Thin articles (under ~600 words) may not rank well; expand key articles with more detail, internal links, and images
- **Core Web Vitals monitoring** — Integrate Vercel Speed Insights or Lighthouse CI in the pipeline to catch regressions per deploy

### Medium Priority

- **Internal linking** — Blog articles and service pages should cross-link to each other with anchor text that includes keywords
- **Structured data validation** — Run all pages through [Google's Rich Results Test](https://search.google.com/test/rich-results) to confirm schemas render without errors
- **Image `priority` prop** — Confirm the hero image uses `priority` on `<Image>` to improve LCP score
- **Blog article count** — More indexed articles = more entry points from Google; a consistent publishing cadence helps long-term ranking
- **`og:image` dimensions** — Ensure the OpenGraph image is exactly 1200×630px for optimal social previews

### Low Priority / Nice to Have

- **Breadcrumb UI** — BreadcrumbList JSON-LD is implemented; adding a visible breadcrumb component reinforces the schema signal
- **Review schema** — Add `AggregateRating` or `Review` schema to LocalBusiness once reviews are available; this unlocks star ratings in SERPs
- **Video schema** — If any service or tutorial videos are added, implement `VideoObject` schema
- **`next/font` local fonts** — Switching from Google Fonts CDN to `next/font` with local files eliminates the third-party request and slightly improves performance scores
- **Search Console** — Verify the property in Google Search Console and submit the sitemap URL manually after each major content update

---

## Summary

The app has a **strong SEO foundation**: pre-rendered pages, comprehensive JSON-LD, hreflang, sitemap, and good performance defaults.

The main areas to focus on going forward are **content quality** (deeper articles, more internal links) and **ongoing monitoring** (Core Web Vitals, Search Console indexing reports).

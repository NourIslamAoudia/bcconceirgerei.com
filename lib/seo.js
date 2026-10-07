/**
 * Shared SEO constants and helpers (metadata, hreflang, JSON-LD).
 */

export const SITE_URL = "https://www.bcconciergerie.com";
export const SITE_NAME = "B&C Conciergerie";
export const LOCALES = ["fr", "en"];
export const DEFAULT_LOCALE = "fr";

// 1200x630 social sharing image (public/og-image.jpg)
export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  type: "image/jpeg",
};

export const BUSINESS = {
  name: "B&C Conciergerie",
  legalName: "B&C Conciergerie Côte d'Azur",
  phone: "+33774061322",
  email: "contact@bcconciergerie.com",
  streetAddress: "9 Avenue Valdiletta",
  locality: "Nice",
  region: "Provence-Alpes-Côte d'Azur",
  country: "FR",
  latitude: 43.7102,
  longitude: 7.262,
  instagram: "https://www.instagram.com/bnc_conciergerie06",
  whatsapp: "https://wa.me/33774061322",
};

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const ogLocale = (locale) => (locale === "en" ? "en_GB" : "fr_FR");

/**
 * Canonical + hreflang alternates for a path that is identical in both
 * locales (e.g. "/services"). Pass "" for the home page.
 */
export function localeAlternates(locale, path = "") {
  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages: {
      fr: `${SITE_URL}/fr${path}`,
      en: `${SITE_URL}/en${path}`,
      "x-default": `${SITE_URL}/${DEFAULT_LOCALE}${path}`,
    },
  };
}

/**
 * Full metadata object for a standard (non-article) page.
 */
export function pageMetadata({ locale, path = "", title, description, keywords }) {
  const url = `${SITE_URL}/${locale}${path}`;
  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: localeAlternates(locale, path),
    openGraph: {
      type: "website",
      locale: ogLocale(locale),
      alternateLocale: locale === "en" ? ["fr_FR"] : ["en_GB"],
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ ...OG_IMAGE, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

/**
 * Single LocalBusiness / Organization entity, referenced by @id elsewhere.
 */
export function organizationJsonLd(locale) {
  const isEn = locale === "en";
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORGANIZATION_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.legalName,
    description: isEn
      ? "Airbnb concierge and short-term rental management in Nice and on the French Riviera: listing creation, dynamic pricing, guest communication, check-in, cleaning and maintenance."
      : "Conciergerie Airbnb et gestion de location saisonnière à Nice et sur la Côte d'Azur : création d'annonce, tarification dynamique, communication voyageurs, accueil, ménage et maintenance.",
    url: SITE_URL,
    logo: `${SITE_URL}/icon_new.png`,
    image: OG_IMAGE.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: [
      "Nice",
      "Monaco",
      "Cannes",
      "Antibes",
      "Juan-les-Pins",
      "Villefranche-sur-Mer",
      "Èze",
      "Saint-Jean-Cap-Ferrat",
    ].map((name) => ({ "@type": "City", name })),
    knowsLanguage: ["fr", "en"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      contactType: "customer service",
      availableLanguage: ["French", "English"],
    },
    sameAs: [BUSINESS.instagram],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: ["fr", "en"],
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/**
 * Renders a JSON-LD <script>. "<" is escaped to keep the payload inert.
 */
export function jsonLdScriptProps(data) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  };
}

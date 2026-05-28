/**
 * Blog slug mapping between FR and EN.
 * Each FR slug maps to its EN equivalent.
 * Update this mapping when adding new blog articles.
 */
const frToEn = {
  "conciergerie-airbnb-nice": "airbnb-concierge-service-nice",
  "reglementation-airbnb-nice-2026": "airbnb-regulations-nice-2026",
  "rentabilite-airbnb-nice-2026": "airbnb-profitability-nice-2026",
  "avis-5-etoiles-airbnb-nice": "5-star-reviews-airbnb-nice",
  "airbnb-vs-location-longue-duree-nice-2026":
    "airbnb-vs-long-term-rental-nice-2026",
  "optimiser-annonce-airbnb-nice-premiere-page":
    "optimize-airbnb-listing-nice-first-page",
  "revenus-airbnb-nice-2026": "airbnb-income-nice-2026",
};

// Build reverse mapping (EN → FR)
const enToFr = Object.fromEntries(
  Object.entries(frToEn).map(([fr, en]) => [en, fr]),
);

/**
 * Get the blog slug for the target locale
 * @param {string} currentSlug - Current blog slug
 * @param {string} currentLocale - Current locale ('fr' or 'en')
 * @param {string} targetLocale - Target locale ('fr' or 'en')
 * @returns {string} The slug in the target locale, or the same slug if no mapping found
 */
export function getAlternateBlogSlug(currentSlug, currentLocale, targetLocale) {
  if (currentLocale === targetLocale) return currentSlug;
  if (currentLocale === "fr") return frToEn[currentSlug] || currentSlug;
  if (currentLocale === "en") return enToFr[currentSlug] || currentSlug;
  return currentSlug;
}

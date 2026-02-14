export default function sitemap() {
  const baseUrl = 'https://www.bcconciergerie.com';
  const currentDate = new Date().toISOString();
  const locales = ['fr', 'en'];

  const pages = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/offres', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/a-propos', changeFrequency: 'monthly', priority: 0.5 },
  ];

  const entries = [];

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

  return entries;
}

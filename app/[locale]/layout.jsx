import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { getTranslations } from "@/lib/getTranslations";
import { LOCALES, organizationJsonLd, websiteJsonLd, jsonLdScriptProps } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!LOCALES.includes(locale)) {
    notFound();
  }

  const t = getTranslations(locale);

  // Navbar translations
  const navbarTranslations = {
    whatsapp: t("navbar.whatsapp"),
    home: t("navbar.home"),
    services: t("navbar.services"),
    offers: t("navbar.offers"),
    about: t("navbar.about"),
    blog: t("navbar.blog"),
    contact: t("navbar.contact"),
    footerText: t("navbar.footerText"),
    contactUs: t("navbar.contactUs"),
  };

  // Footer translations
  const footerTranslations = {
    tagline: t("footer.tagline"),
    siteMap: t("footer.siteMap"),
    home: t("footer.home"),
    services: t("footer.services"),
    offers: t("footer.offers"),
    about: t("footer.about"),
    blog: t("footer.blog"),
    contact: t("footer.contact"),
    destinations: t("footer.destinations"),
    findUs: t("footer.findUs"),
    address: t("footer.address"),
    contactUs: t("footer.contactUs"),
    copyright: t("footer.copyright"),
  };

  return (
    <html lang={locale}>
      <head>
        {/* Critical CSS - Minimal inline to prevent render blocking */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          *{margin:0;padding:0;box-sizing:border-box}
          :root{--olive-700:#708238;--beige-100:#F5EEDF;--offwhite-50:#FAF9F6;--text-dark:#222}
          html,body{width:100%;height:100%;margin:0;padding:0;overflow-x:hidden}
          body{background-color:#071014;color:var(--text-dark);font-family:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}
          .hero-section{min-height:100vh;position:relative;display:flex;align-items:center;justify-content:center}
        `,
          }}
        />

        {/* Images are served from the asset host through /_next/image */}
        <link rel="dns-prefetch" href="https://bcconciergerie.com" />

        {/* Structured Data - Organization / LocalBusiness + WebSite */}
        <script {...jsonLdScriptProps(organizationJsonLd(locale))} />
        <script {...jsonLdScriptProps(websiteJsonLd())} />
      </head>
      <body className={inter.variable} suppressHydrationWarning>
        <LanguageProvider initialLanguage={locale}>
          <Navbar locale={locale} translations={navbarTranslations} />
          <main className="site-main">{children}</main>
          <Footer locale={locale} translations={footerTranslations} />
        </LanguageProvider>
        {/* Analytics loaded after interactive - non-blocking */}
        <Analytics />
      </body>
    </html>
  );
}

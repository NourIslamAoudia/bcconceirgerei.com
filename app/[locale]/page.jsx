import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import NosEngagements from "@/components/NosEngagements";
import IconicCollectionCarousel from "@/components/IconicCollectionCarousel";
import ServicesSection from "@/components/ServicesSection";
import NosOffres from "@/components/NosOffres";
import NosLogements from "@/components/NosLogements";
import BlogSection from "@/components/BlogSection";
import { getTranslations } from "@/lib/getTranslations";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Airbnb Concierge in Nice | Short-Term Rental Management \u2013 B\u0026C"
      : "Conciergerie Airbnb Nice | Gestion Location Saisonnière – B\u0026C",
    description: isEn
      ? "Premium concierge services in Nice. Airbnb management, professional cleaning, optimized revenue. Nice, Monaco, Cannes. Free quote."
      : "Conciergerie Airbnb à Nice haut de gamme pour la gestion location saisonnière. De Nice à Monaco et Cannes. Revenus locatifs optimisés. Devis gratuit.",
    keywords: [
      "conciergerie Airbnb Nice",
      "location airbnb Nice",
      "conciergerie Nice",
      "gestion locative Nice",
      "conciergerie villa Nice",
      "conciergerie appartement Nice",
      "location saisonnière Nice",
      "gestion airbnb Nice",
      "conciergerie de luxe Nice",
      "gestion Airbnb Monaco",
      "conciergerie premium Cannes",
      "gestion de biens Antibes",
    ],
    alternates: {
      canonical: `https://www.bcconciergerie.com/${locale}`,
      languages: {
        fr: "https://www.bcconciergerie.com/fr",
        en: "https://www.bcconciergerie.com/en",
      },
    },
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const isEn = locale === "en";

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "B&C Conciergerie",
    url: "https://www.bcconciergerie.com",
    inLanguage: isEn ? "en" : "fr",
    publisher: {
      "@type": "Organization",
      name: "B\u0026C Conciergerie Nice",
      url: "https://www.bcconciergerie.com",
      logo: "https://www.bcconciergerie.com/icon_new.png",
    },
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: isEn
      ? "Airbnb Concierge in Nice | Short-Term Rental Management \u2013 B\u0026C"
      : "Conciergerie Airbnb \u00e0 Nice | Gestion Location Saisonni\u00e8re \u2013 B\u0026C",
    description: isEn
      ? "Premium concierge services in Nice. Airbnb management, professional cleaning, optimized revenue."
      : "Conciergerie Airbnb \u00e0 Nice haut de gamme. Gestion location saisonni\u00e8re, m\u00e9nage professionnel, revenus optimis\u00e9s.",
    url: `https://www.bcconciergerie.com/${locale}`,
    inLanguage: isEn ? "en" : "fr",
    isPartOf: {
      "@type": "WebSite",
      url: "https://www.bcconciergerie.com",
    },
  };

  return (
    <div className="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <HeroSection
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        button={t("hero.button")}
        modalTitle={t("hero.modalTitle")}
      />

      <WelcomeSection
        title={t("welcome.title")}
        subtitle={t("welcome.subtitle")}
        description1={t("welcome.description1")}
        description2={t("welcome.description2")}
        description3={t("welcome.description3")}
      />

      <NosOffres
        title={t("nosOffres.title")}
        subtitle={t("nosOffres.subtitle")}
        launchTitle={t("nosOffres.launchTitle")}
        launchBadge={t("nosOffres.launchBadge")}
        launchDesc={t("nosOffres.launchDesc")}
        launchButton={t("nosOffres.launchButton")}
        partnerTitle={t("nosOffres.partnerTitle")}
        partnerDesc={t("nosOffres.partnerDesc")}
        partnerButton={t("nosOffres.partnerButton")}
      />

      <WhyChooseUs translations={t("whyChooseUs")} />

      <NosEngagements
        badge={t("nosEngagements.badge")}
        title={t("nosEngagements.title")}
        description={t("nosEngagements.description")}
        item1={t("nosEngagements.item1")}
        item2={t("nosEngagements.item2")}
        item3={t("nosEngagements.item3")}
        item4={t("nosEngagements.item4")}
      />

      <IconicCollectionCarousel translations={t("destinations")} />

      <ServicesSection
        translations={{
          ...t("services"),
          modalTitle: t("hero.modalTitle"),
        }}
      />

      <NosLogements translations={t("nosLogements")} />

      <BlogSection locale={locale} translations={t("blogSection")} />
    </div>
  );
}

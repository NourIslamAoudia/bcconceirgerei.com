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
import {
  pageMetadata,
  jsonLdScriptProps,
  SITE_URL,
  WEBSITE_ID,
  ORGANIZATION_ID,
  OG_IMAGE,
} from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";
  return pageMetadata({
    locale,
    path: "",
    title: isEn
      ? "Airbnb Concierge in Nice | Short-Term Rental Management – B&C"
      : "Conciergerie Airbnb à Nice | Gestion Location Saisonnière – B&C",
    description: isEn
      ? "Airbnb concierge in Nice: full short-term rental management, professional cleaning, guest check-in and optimised revenue. Nice, Monaco, Cannes. Free estimate."
      : "Conciergerie Airbnb à Nice haut de gamme pour la gestion location saisonnière. De Nice à Monaco et Cannes. Revenus locatifs optimisés. Devis gratuit.",
    keywords: isEn
      ? [
        "Airbnb concierge Nice",
        "Airbnb management Nice",
        "short-term rental management Nice",
        "holiday rental management French Riviera",
        "property management Nice",
        "vacation rental concierge Nice",
        "Airbnb management Monaco",
        "Airbnb concierge Cannes",
      ]
      : [
        "conciergerie Airbnb Nice",
        "conciergerie Nice",
        "gestion locative Nice",
        "gestion Airbnb Nice",
        "location saisonnière Nice",
        "conciergerie appartement Nice",
        "conciergerie villa Nice",
        "gestion Airbnb Monaco",
        "conciergerie Cannes",
        "gestion de biens Antibes",
      ],
  });
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const isEn = locale === "en";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/${locale}#webpage`,
    url: `${SITE_URL}/${locale}`,
    name: isEn
      ? "Airbnb Concierge in Nice | Short-Term Rental Management – B&C"
      : "Conciergerie Airbnb à Nice | Gestion Location Saisonnière – B&C",
    description: isEn
      ? "Premium concierge services in Nice. Airbnb management, professional cleaning, optimized revenue."
      : "Conciergerie Airbnb à Nice haut de gamme. Gestion location saisonnière, ménage professionnel, revenus optimisés.",
    inLanguage: locale,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    primaryImageOfPage: OG_IMAGE.url,
  };

  return (
    <div className="home-page">
      <script {...jsonLdScriptProps(webPageJsonLd)} />
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

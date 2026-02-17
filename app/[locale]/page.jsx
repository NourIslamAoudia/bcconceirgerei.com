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
      ? "B&C Conciergerie Côte d'Azur | Airbnb Management Nice Monaco"
      : "B&C Conciergerie Côte d'Azur | Gestion Airbnb Nice Monaco",
    description: isEn
      ? "Premium concierge services on the French Riviera. Airbnb management, professional cleaning, optimized revenue. Nice, Monaco, Cannes. Free quote."
      : "Conciergerie haut de gamme sur la Côte d'Azur. Gestion locative Airbnb, ménage professionnel, revenus optimisés. Nice, Monaco, Cannes. Devis gratuit.",
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

  return (
    <div className="home-page">
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

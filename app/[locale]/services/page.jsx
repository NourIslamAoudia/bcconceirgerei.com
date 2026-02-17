import Image from "next/image";
import { getTranslations } from "@/lib/getTranslations";
import ServicesCTA from "@/components/ServicesCTA";
import "./services.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn
    ? "Services de Conciergerie Airbnb Nice | Gestion Location Saisonnière – B\u0026C"
    : "Services de Conciergerie Airbnb Nice | Gestion Location Saisonnière – B\u0026C";
  const description = isEn
    ? "Discover our Airbnb concierge services in Nice: full management, professional cleaning, personal welcome. Nice, Monaco, Cannes."
    : "Découvrez nos services de conciergerie Airbnb à Nice : gestion location saisonnière, ménage professionnel, accueil personnalisé. Nice, Monaco, Cannes.";
  return {
    title,
    description,
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
    openGraph: {
      type: "website",
      locale: isEn ? "en_GB" : "fr_FR",
      url: `https://www.bcconciergerie.com/${locale}/services`,
      title,
      description,
      siteName: "B&C Conciergerie",
      images: [
        {
          url: "https://www.bcconciergerie.com/icon_new.png",
          width: 1200,
          height: 630,
          alt: "B&C Conciergerie Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.bcconciergerie.com/icon_new.png"],
    },
    alternates: {
      canonical: `https://www.bcconciergerie.com/${locale}/services`,
      languages: {
        fr: "https://www.bcconciergerie.com/fr/services",
        en: "https://www.bcconciergerie.com/en/services",
      },
    },
  };
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-image">
          <Image
            src="https://bcconciergerie.com/assets/nosservice_hero.jpg"
            alt="Services B&C Conciergerie Côte d'Azur"
            fill
            priority
            quality={90}
            className="hero-background"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="hero-overlay" />
        </div>
        <div className="services-hero-content">
          <h1 className="services-hero-title">{t("servicesPage.heroTitle")}</h1>
          <p className="services-hero-subtitle">
            {t("servicesPage.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="services-introduction">
        <div className="services-introduction-container">
          <div className="services-intro-grid">
            <div className="intro-left">
              <h3 className="services-section-heading">
                {t("servicesPage.introHeading")}
              </h3>
              <h2 className="services-large-title">
                {t("servicesPage.introTitle")}
              </h2>
            </div>
            <div className="intro-right">
              <p>{t("servicesPage.introText")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="services-detail-section">
        <div className="services-detail-container">
          <main className="scrolling-content">
            {/* Section 1: Gestion locative complète */}
            <section id="gestion" className="service-section">
              <h2 className="service-title">
                {t("servicesPage.gestionTitle")}
              </h2>
              <p className="service-description">
                {t("servicesPage.gestionDesc")}
              </p>
              <div className="stacked-images-container">
                <Image
                  src="https://bcconciergerie.com/assets/Gestion2.jpg"
                  alt="Optimisation des annonces"
                  width={700}
                  height={500}
                  className="image-back"
                />
                <Image
                  src="https://bcconciergerie.com/assets/Gestion1.jpg"
                  alt="Création et gestion des annonces"
                  width={700}
                  height={500}
                  className="image-front"
                  priority
                />
              </div>
            </section>

            {/* Section 2: Entretien et maintenance */}
            <section id="entretien" className="service-section">
              <h2 className="service-title">
                {t("servicesPage.entretienTitle")}
              </h2>
              <p className="service-description">
                {t("servicesPage.entretienDesc")}
              </p>
              <div className="stacked-images-container">
                <Image
                  src="https://bcconciergerie.com/assets/mainte2.jpg"
                  alt="Inspection qualité"
                  width={700}
                  height={500}
                  className="image-back"
                />
                <Image
                  src="https://bcconciergerie.com/assets/mainte1.jpg"
                  alt="Ménage professionnel"
                  width={700}
                  height={500}
                  className="image-front"
                />
              </div>
            </section>

            {/* Section 3: Accueil et expérience client */}
            <section id="accueil" className="service-section">
              <h2 className="service-title">
                {t("servicesPage.accueilTitle")}
              </h2>
              <p className="service-description">
                {t("servicesPage.accueilDesc")}
              </p>
              <div className="stacked-images-container">
                <Image
                  src="https://bcconciergerie.com/assets/accueil2.jpg"
                  alt="Formation accueil client"
                  width={700}
                  height={500}
                  className="image-back"
                />
                <Image
                  src="https://bcconciergerie.com/assets/dispo.jpg"
                  alt="Disponibilité 7j/7"
                  width={700}
                  height={500}
                  className="image-front"
                />
              </div>
            </section>

            {/* Section 4: Valorisation du bien */}
            <section id="valorisation" className="service-section">
              <h2 className="service-title">
                {t("servicesPage.valorisationTitle")}
              </h2>
              <p className="service-description">
                {t("servicesPage.valorisationDesc")}
              </p>
              <div className="stacked-images-container">
                <Image
                  src="https://bcconciergerie.com/assets/photog2.jpg"
                  alt="Shooting professionnel"
                  width={700}
                  height={500}
                  className="image-back"
                />
                <Image
                  src="https://bcconciergerie.com/assets/photog.jpg"
                  alt="Photographie professionnelle"
                  width={700}
                  height={500}
                  className="image-front"
                />
              </div>
            </section>

            {/* Closing CTA Section — Client component for modal */}
            <ServicesCTA
              ctaText={t("servicesPage.ctaText")}
              ctaButton={t("servicesPage.ctaButton")}
              modalTitle={t("hero.modalTitle")}
            />
          </main>
        </div>
      </section>
    </main>
  );
}

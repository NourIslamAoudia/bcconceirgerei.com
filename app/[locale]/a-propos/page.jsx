import Image from "next/image";
import { getTranslations } from "@/lib/getTranslations";
import {
  FaLeaf,
  FaStar,
  FaLightbulb,
  FaHandshake,
  FaHeart,
} from "react-icons/fa";
import "./apropos.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn
    ? "About Us | B&C Conciergerie Côte d'Azur"
    : "À Propos | B&C Conciergerie Côte d'Azur";
  const description = isEn
    ? "Discover B&C Conciergerie, your premium property management partner on the French Riviera. Our values: passion, excellence, innovation, partnership."
    : "Découvrez B&C Conciergerie, votre partenaire de gestion locative premium sur la Côte d'Azur. Nos valeurs : passion, excellence, innovation, partenariat.";
  return {
    title,
    description,
    keywords: isEn
      ? [
          "about B&C conciergerie",
          "concierge french riviera",
          "property management team nice",
          "luxury concierge values",
        ]
      : [
          "à propos B&C conciergerie",
          "conciergerie côte d'azur",
          "équipe gestion locative nice",
          "valeurs conciergerie luxe",
        ],
    openGraph: {
      type: "website",
      locale: isEn ? "en_GB" : "fr_FR",
      url: `https://www.bcconciergerie.com/${locale}/a-propos`,
      title,
      description,
      siteName: "B&C Conciergerie",
      images: [
        {
          url: "https://www.bcconciergerie.com/icon_new.png",
          width: 1200,
          height: 630,
          alt: "B&C Conciergerie About",
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
      canonical: `https://www.bcconciergerie.com/${locale}/a-propos`,
      languages: {
        fr: "https://www.bcconciergerie.com/fr/a-propos",
        en: "https://www.bcconciergerie.com/en/a-propos",
      },
    },
  };
}

export default async function AProposPage({ params }) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const valeurs = [
    {
      icon: <FaHeart />,
      titreKey: "valeur1Title",
      descriptionKey: "valeur1Desc",
    },
    {
      icon: <FaStar />,
      titreKey: "valeur2Title",
      descriptionKey: "valeur2Desc",
    },
    {
      icon: <FaLightbulb />,
      titreKey: "valeur3Title",
      descriptionKey: "valeur3Desc",
    },
    {
      icon: <FaHandshake />,
      titreKey: "valeur4Title",
      descriptionKey: "valeur4Desc",
    },
  ];

  return (
    <main className="apropos-page">
      {/* Hero Section avec Image */}
      <section className="apropos-hero">
        <div className="apropos-hero-overlay"></div>
        <div className="apropos-hero-image">
          <Image
            src="https://bcconciergerie.com/assets/a propospc.jpg"
            alt="Villa de luxe B&C Conciergerie sur la Côte d'Azur"
            fill
            priority
            quality={95}
            className="hero-img"
            sizes="100vw"
          />
        </div>
        <div className="apropos-hero-content">
          <div className="hero-badge">
            <FaLeaf className="badge-icon" />
            <span>{t("aproposPage.heroBadge")}</span>
          </div>
          <h1 className="apropos-hero-title">{t("aproposPage.heroTitle")}</h1>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="apropos-story">
        <div className="story-container">
          <div className="story-content">
            <div className="section-tag">
              <span className="tag-line"></span>
              <span className="tag-text">{t("aproposPage.storyTag")}</span>
              <span className="tag-line"></span>
            </div>
            <div className="story-text">
              <p className="story-paragraph">{t("aproposPage.storyP1")}</p>
              <div className="story-highlight">
                <div className="highlight-icon">
                  <FaLeaf />
                </div>
                <div className="highlight-content">
                  <p className="highlight-text">
                    <strong>{t("aproposPage.storyVision")}</strong>{" "}
                    {t("aproposPage.storyVisionText")}
                  </p>
                </div>
              </div>
              <p className="story-paragraph">{t("aproposPage.storyP2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="apropos-valeurs">
        <div className="valeurs-container">
          <div className="section-tag">
            <span className="tag-line"></span>
            <span className="tag-text">{t("aproposPage.valeursTag")}</span>
            <span className="tag-line"></span>
          </div>
          <h2 className="valeurs-title">{t("aproposPage.valeursTitle")}</h2>
          <div className="valeurs-grid">
            {valeurs.map((valeur, index) => (
              <div
                key={index}
                className="valeur-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="valeur-icon-wrapper">
                  <div className="valeur-icon">{valeur.icon}</div>
                </div>
                <h3 className="valeur-titre">
                  {t(`aproposPage.${valeur.titreKey}`)}
                </h3>
                <p className="valeur-description">
                  {t(`aproposPage.${valeur.descriptionKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

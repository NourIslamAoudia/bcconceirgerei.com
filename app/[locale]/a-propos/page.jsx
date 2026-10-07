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
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";
  return pageMetadata({
    locale,
    path: "/a-propos",
    title: isEn
      ? "About B&C Conciergerie Nice | Our Story & Values"
      : "À Propos de B&C Conciergerie Nice | Notre Histoire & Valeurs",
    description: isEn
      ? "Discover B&C Conciergerie, your trusted private concierge for short-term rental management in Nice. Our expertise, values and commitment."
      : "Découvrez B&C Conciergerie Nice, votre partenaire de confiance pour la gestion location saisonnière à Nice. Notre expertise, nos valeurs, notre engagement.",
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

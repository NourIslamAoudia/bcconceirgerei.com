"use client";

import { useState } from "react";
import Image from "next/image";
import "./services.css";
import ContactFormModal from "@/components/ContactFormModal";
import { useLanguage } from "@/context/LanguageContext";

// Note: Metadata export moved to a separate metadata file for client components
// See app/services/metadata.js

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

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
          {/* Scrolling Content */}
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
                  alt="Optimisation des annonces Airbnb - Gestion locative Côte d'Azur"
                  width={700}
                  height={500}
                  className="image-back"
                />
                <Image
                  src="https://bcconciergerie.com/assets/Gestion1.jpg"
                  alt="Création et gestion des annonces location saisonnière Nice Monaco"
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
                  alt="Inspection qualité logement - Conciergerie Nice Monaco"
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

            {/* Closing CTA Section */}
            <section className="services-closing-cta">
              <p className="closing-message">{t("servicesPage.ctaText")}</p>
              <button
                className="cta-estimation-button"
                onClick={() => setIsModalOpen(true)}
              >
                {t("servicesPage.ctaButton")}
              </button>
            </section>
          </main>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t("hero.modalTitle")}
      />
    </main>
  );
}

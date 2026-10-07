import Image from "next/image";
import { getTranslations } from "@/lib/getTranslations";
import { FaWhatsapp } from "react-icons/fa";
import "./offres.css";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isEn = locale === "en";
  return pageMetadata({
    locale,
    path: "/offres",
    title: isEn
      ? "Airbnb Management Offers in Nice | Concierge Pricing – B&C"
      : "Offres Conciergerie Airbnb Nice | Tarifs Gestion Locative – B&C",
    description: isEn
      ? "Explore our Airbnb concierge offers in Nice. Flexible packages for short-term rental management in Nice, Monaco and Cannes."
      : "Explorez nos offres de conciergerie Airbnb à Nice sur-mesure. Packages flexibles, gestion location saisonnière Nice, Monaco, Cannes.",
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

export default async function OffresPage({ params }) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return (
    <main className="offres-page">
      {/* Hero Section */}
      <section className="offres-hero">
        <div className="offres-hero-image">
          <Image
            src="https://bcconciergerie.com/assets/nosoffreaccu.jpg"
            alt="Nos Offres B&C Conciergerie Côte d'Azur"
            fill
            priority
            quality={90}
            className="hero-background"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="hero-overlay" />
        </div>
        <div className="offres-hero-content">
          <h1 className="offres-hero-title">{t("offresPage.heroTitle")}</h1>
          <p className="offres-hero-subtitle">{t("offresPage.heroSubtitle")}</p>
        </div>
      </section>

      {/* Introduction Banner */}
      <section className="intro-banner">
        <div className="intro-container">
          <div
            className="intro-icon"
            aria-hidden="true"
            style={{ fontSize: "48px", lineHeight: 1 }}
          >
            <span role="img" aria-label="célébration">
              🎉
            </span>
          </div>
          <h2 className="intro-title">{t("offresPage.introTitle")}</h2>
          <div className="intro-content">
            <p>{t("offresPage.introP1")}</p>
            <p>{t("offresPage.introP2")}</p>
            <p>{t("offresPage.introP3")}</p>
          </div>
          <div className="alert-box">
            <div className="alert-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>
            <p>
              <strong>{t("offresPage.alertText")}</strong>
              <br />
              {t("offresPage.alertSubtext")}
            </p>
          </div>
        </div>
      </section>

      {/* Offer Cards Section */}
      <section className="offers-section">
        <div className="offers-container">
          {/* Offer Card 1 */}
          <div className="offer-card">
            <div className="offer-image-wrapper">
              <Image
                src="https://bcconciergerie.com/assets/lance1.jpg"
                alt="Clients Pionniers"
                width={600}
                height={400}
                className="offer-image"
              />
            </div>
            <div className="offer-content">
              <div className="offer-icon-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <h3 className="offer-title">{t("offresPage.offer1Title")}</h3>
              <p className="offer-subtitle">{t("offresPage.offer1Subtitle")}</p>
              <p className="offer-description">
                {t("offresPage.offer1Description")}
              </p>

              <div className="highlight-box">
                <div className="highlight-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p>
                  <strong>{t("offresPage.offer1Highlight")}</strong>
                  <br />
                  {t("offresPage.offer1HighlightSub")}
                </p>
              </div>

              <p className="offer-benefits">{t("offresPage.offer1Benefits")}</p>

              <div className="why-box">
                <div className="why-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4>{t("offresPage.offer1WhyTitle")}</h4>
                <p>{t("offresPage.offer1WhyText")}</p>
              </div>

              <div className="bonus-box">
                <div className="bonus-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                    <path
                      fillRule="evenodd"
                      d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p>
                  <strong>{t("offresPage.offer1BonusTitle")}</strong>{" "}
                  {t("offresPage.offer1BonusText")}
                </p>
              </div>
            </div>
          </div>

          {/* Offer Card 2 */}
          <div className="offer-card">
            <div className="offer-image-wrapper offer-image-split">
              <div className="split-image-container">
                <Image
                  src="https://bcconciergerie.com/assets/multi1.jpg"
                  alt="Propriétaires Partenaires"
                  fill
                  className="offer-image split-left"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="split-image-container">
                <Image
                  src="https://bcconciergerie.com/assets/multi2.jpg"
                  alt="Propriétaires Partenaires - Multi-biens"
                  fill
                  className="offer-image split-right"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="offer-content">
              <div className="offer-icon-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <h3 className="offer-title">{t("offresPage.offer2Title")}</h3>
              <p className="offer-subtitle">{t("offresPage.offer2Subtitle")}</p>
              <p
                className="offer-description"
                style={{ whiteSpace: "pre-line" }}
              >
                {t("offresPage.offer2Description")}
              </p>

              <div className="highlight-box">
                <div className="highlight-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p>
                    <strong>{t("offresPage.offer2Highlight")}</strong>
                  </p>
                  <ul>
                    <li>{t("offresPage.offer2List1")}</li>
                    <li>{t("offresPage.offer2List2")}</li>
                  </ul>
                </div>
              </div>

              <div className="philosophy-box">
                <div className="philosophy-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                  </svg>
                </div>
                <h4>{t("offresPage.offer2PhiloTitle")}</h4>
                <p>{t("offresPage.offer2PhiloText1")}</p>
                <p className="emphasis">{t("offresPage.offer2PhiloText2")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Duration & Conditions Section */}
      <section className="duration-section">
        <div className="duration-container">
          <div className="duration-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <h2 className="duration-title">{t("offresPage.durationTitle")}</h2>
          <h3 className="duration-subtitle">
            {t("offresPage.durationSubtitle")}
          </h3>
          <div className="duration-content">
            <p>
              {t("offresPage.durationP1")}{" "}
              <strong>{t("offresPage.durationP1Bold")}</strong>.
            </p>
            <p>
              {t("offresPage.durationP2Start")}{" "}
              <strong>{t("offresPage.durationP2Bold")}</strong>.
            </p>
            <div className="gift-box">
              <div className="gift-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                </svg>
              </div>
              <p>{t("offresPage.durationGiftText")}</p>
            </div>
            <p className="final-note">{t("offresPage.durationFinalNote")}</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
              <path
                fillRule="evenodd"
                d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="cta-title">{t("offresPage.ctaTitle")}</h2>
          <p className="cta-description">{t("offresPage.ctaDescription")}</p>
          <a
            className="cta-button"
            href="https://wa.me/+33774061322"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactez-nous via WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
            {t("offresPage.ctaButton")}
          </a>
        </div>
      </section>
    </main>
  );
}

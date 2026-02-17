import React from "react";
import Image from "next/image";
import "./WhyChooseUs.css";
import AnimateInView from "./AnimateInView";

/**
 * WhyChooseUs Component — SERVER COMPONENT
 * Displays four key benefits of B&C Conciergerie with CSS-driven animations.
 * Text is passed as a translations prop from the server page for SSR/SEO.
 * Scroll-triggered animations are handled by the AnimateInView client wrapper.
 */
const WhyChooseUs = ({ translations: t }) => {
  return (
    <section className="why-choose-us">
      <AnimateInView className="why-container" threshold={0.15}>
        <div className="why-columns">
          <div className="why-image" aria-hidden>
            <Image
              src="https://bcconciergerie.com/assets/olive.jpg"
              alt="Conciergerie de luxe Côte d'Azur - Gestion locative premium Nice Monaco"
              width={600}
              height={800}
              loading="lazy"
            />
          </div>

          <div className="why-content">
            <h2 className="why-title">{t.title}</h2>

            {/* mobile-only image placed after the title */}
            <div className="why-image-mobile" aria-hidden>
              <Image
                src="https://bcconciergerie.com/assets/olive.jpg"
                alt="Conciergerie luxe Côte d'Azur"
                width={400}
                height={500}
                loading="lazy"
              />
            </div>

            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-badge" aria-hidden>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 2L4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <h3 className="benefit-title">{t.benefit1Title}</h3>
                <p className="benefit-description">{t.benefit1Desc}</p>
              </div>

              <div className="benefit-card">
                <span className="benefit-badge" aria-hidden>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M3 17h3v-7H3v7zm6 0h3V7H9v10zm6 0h3v-4h-3v4z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <h3 className="benefit-title">{t.benefit2Title}</h3>
                <p className="benefit-description">{t.benefit2Desc}</p>
              </div>

              <div className="benefit-card">
                <span className="benefit-badge" aria-hidden>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 17.3L5.6 20l1-6.1L2 9.6l6.2-.9L12 3l3.8 5.7 6.2.9-4.6 4.3L18.4 20 12 17.3z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <h3 className="benefit-title">{t.benefit3Title}</h3>
                <p className="benefit-description">{t.benefit3Desc}</p>
              </div>

              <div className="benefit-card">
                <span className="benefit-badge" aria-hidden>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <h3 className="benefit-title">{t.benefit4Title}</h3>
                <p className="benefit-description">{t.benefit4Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimateInView>
    </section>
  );
};

export default WhyChooseUs;

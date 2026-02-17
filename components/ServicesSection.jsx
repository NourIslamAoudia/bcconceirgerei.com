import React from "react";
import Image from "next/image";
import "./ServicesSection.css";
import ContactButton from "./ContactButton";
import AnimateInView from "./AnimateInView";

/**
 * Services Section Component — SERVER COMPONENT
 * Displays 4 service cards in a blog post style layout.
 * Text is passed as a translations prop from the server page for SSR/SEO.
 * Scroll-triggered animations are handled by the AnimateInView client wrapper.
 * The interactive CTA button + modal is delegated to the ContactButton client component.
 */
const ServicesSection = ({ translations: t }) => {
  const services = [
    {
      id: 1,
      title: t.service1.title,
      image: "https://bcconciergerie.com/assets/service1.jpg",
      category: t.service1.category,
      date: t.service1.date,
      features: t.service1.features,
    },
    {
      id: 2,
      title: t.service2.title,
      image: "https://bcconciergerie.com/assets/service2.jpg",
      category: t.service2.category,
      date: t.service2.date,
      features: t.service2.features,
    },
    {
      id: 3,
      title: t.service3.title,
      image:
        "https://www.leguidedescommerciaux.com/wp-content/uploads/2025/04/Comment-bien-accueillir-un-client-pour-maximiser-limpact-.jpg",
      category: t.service3.category,
      date: t.service3.date,
      features: t.service3.features,
    },
    {
      id: 4,
      title: t.service4.title,
      image:
        "https://studio.gaynako.com/wp-content/uploads/2023/04/photographe-professionnel.jpeg",
      category: t.service4.category,
      date: t.service4.date,
      features: t.service4.features,
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-main-title">{t.mainTitle}</h2>
          <p className="services-intro">{t.intro}</p>
        </div>

        {/* Service Cards Grid */}
        <AnimateInView className="services-grid" threshold={0.12}>
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-image-wrapper">
                <Image
                  src={service.image}
                  alt={`${service.title} - Conciergerie Côte d'Azur Nice Monaco`}
                  className="service-card-image"
                  width={400}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="service-card-content">
                <div className="service-meta">
                  <span className="service-category">{service.category}</span>
                  <span className="service-date">{service.date}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="service-feature-item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="feature-icon"
                      >
                        <path
                          d="M13.3334 4L6.00002 11.3333L2.66669 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </AnimateInView>

        {/* CTA Button */}
        <div className="services-actions">
          <ContactButton label={t.cta} modalTitle={t.modalTitle} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from "react";
import "./NosLogements.css";
import AnimateInView from "./AnimateInView";
import PropertyCard from "./PropertyCard";

/**
 * Nos Logements Section — SERVER COMPONENT
 * Showcases 3 luxury property categories with photo cycling on hover.
 * Text is passed as a translations prop from the server page for SSR/SEO.
 * Scroll-triggered grid animation is handled by AnimateInView (client wrapper).
 * Interactive photo cards are handled by PropertyCard (client component).
 */
const NosLogements = ({ translations: t }) => {
  const properties = [
    {
      id: 1,
      categoryKey: "category1",
      titleKey: "title1",
      descriptionKey: "desc1",
      photo1: "https://bcconciergerie.com/assets/log11.jpg",
      photo2: "https://bcconciergerie.com/assets/log12.jpg",
      photo3: "https://bcconciergerie.com/assets/log13.jpg",
      badgeColor: "blue",
    },
    {
      id: 2,
      categoryKey: "category2",
      titleKey: "title2",
      descriptionKey: "desc2",
      photo1: "https://bcconciergerie.com/assets/log14.jpg",
      photo2: "https://bcconciergerie.com/assets/log15.jpg",
      photo3: "https://bcconciergerie.com/assets/log3.jpg",
      badgeColor: "gold",
    },
    {
      id: 3,
      categoryKey: "category3",
      titleKey: "title3",
      descriptionKey: "desc3",
      photo1: "https://bcconciergerie.com/assets/log21.jpg",
      photo2: "https://bcconciergerie.com/assets/log22.jpg",
      photo3: "https://bcconciergerie.com/assets/log23.jpg",
      photo4: "https://bcconciergerie.com/assets/log24.jpg",
      photo5: "https://bcconciergerie.com/assets/log25.jpg",
      badgeColor: "olive",
    },
  ];

  return (
    <section className="nos-logements-section">
      <div className="nos-logements-container">
        {/* Section Header */}
        <div className="nos-logements-header">
          <span className="section-badge">{t.badge}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-intro">{t.intro}</p>
        </div>

        {/* Properties Grid */}
        <AnimateInView className="properties-grid" threshold={0.1}>
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </AnimateInView>
      </div>
    </section>
  );
};

export default NosLogements;

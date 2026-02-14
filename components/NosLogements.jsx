'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import './NosLogements.css';

/**
 * Nos Logements Section — HYBRID (Client for hover/scroll interactions, SSR text via props)
 * Showcases 3 luxury property categories with photo cycling on hover.
 * Text is passed as a translations prop from the server page for SSR/SEO.
 */
const NosLogements = ({ translations: t }) => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const properties = [
    {
      id: 1,
      categoryKey: 'category1',
      titleKey: 'title1',
      descriptionKey: 'desc1',
      photo1: 'https://bcconciergerie.com/assets/log11.jpg',
      photo2: 'https://bcconciergerie.com/assets/log12.jpg',
      photo3: 'https://bcconciergerie.com/assets/log13.jpg',
      badgeColor: 'blue'
    },
    {
      id: 2,
      categoryKey: 'category2',
      titleKey: 'title2',
      descriptionKey: 'desc2',
      photo1: 'https://bcconciergerie.com/assets/log14.jpg',
      photo2: 'https://bcconciergerie.com/assets/log15.jpg',
      photo3: 'https://bcconciergerie.com/assets/log3.jpg',
      badgeColor: 'gold'
    },
    {
      id: 3,
      categoryKey: 'category3',
      titleKey: 'title3',
      descriptionKey: 'desc3',
      photo1: 'https://bcconciergerie.com/assets/log21.jpg',
      photo2: 'https://bcconciergerie.com/assets/log22.jpg',
      photo3: 'https://bcconciergerie.com/assets/log23.jpg',
      photo4: 'https://bcconciergerie.com/assets/log24.jpg',
      photo5: 'https://bcconciergerie.com/assets/log25.jpg',
      badgeColor: 'olive'
    }
  ];

  return (
    <section className="nos-logements-section" ref={sectionRef}>
      <div className="nos-logements-container">
        {/* Section Header */}
        <div className="nos-logements-header">
          <span className="section-badge">{t.badge}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-intro">
            {t.intro}
          </p>
        </div>

        {/* Properties Grid */}
        <div className={`properties-grid ${inView ? 'in-view' : ''}`}>
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Individual Property Card Component
 */
const PropertyCard = ({ property, index }) => {
  const [activePhoto, setActivePhoto] = useState(1);
  const scrollContainerRef = useRef(null);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);

  // Get all photos from property
  const photos = [];
  if (property.photo1) photos.push(property.photo1);
  if (property.photo2) photos.push(property.photo2);
  if (property.photo3) photos.push(property.photo3);
  if (property.photo4) photos.push(property.photo4);
  if (property.photo5) photos.push(property.photo5);

  // Auto cycle through photos on hover
  const handleMouseEnter = () => {
    let currentIndex = 0;
    setActivePhoto(1);

    intervalRef.current = setInterval(() => {
      currentIndex = (currentIndex + 1) % photos.length;
      setActivePhoto(currentIndex + 1);
    }, 800); // Change photo every 800ms
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setActivePhoto(1);
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Handle horizontal scroll on mobile to change active photo
  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const photoIndex = Math.round(scrollLeft / cardWidth) + 1;
    setActivePhoto(photoIndex);

    // Check if at last photo and auto-scroll to next card
    const scrollWidth = container.scrollWidth;
    const maxScroll = scrollWidth - cardWidth;

    // If we're at the last photo (within 10px tolerance)
    if (scrollLeft >= maxScroll - 10) {
      setTimeout(() => {
        const nextCard = cardRef.current?.nextElementSibling;
        if (nextCard) {
          nextCard.scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
          });
        }
      }, 400); // Small delay before jumping to next card
    }
  };

  return (
    <div
      ref={cardRef}
      className="property-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Photo Gallery */}
      <div className="property-photos" ref={scrollContainerRef} onScroll={handleScroll}>
        <div className="photo-wrapper">
          {photos.map((photo, photoIndex) => (
            <Image
              key={photoIndex}
              src={photo}
              alt={`${property.title} location luxe Côte d'Azur - Photo ${photoIndex + 1}`}
              className={`property-photo ${activePhoto === photoIndex + 1 ? 'active' : ''}`}
              width={400}
              height={300}
              loading="lazy"
            />
          ))}
        </div>

        {/* Photo Indicators */}
        <div className="photo-indicators">
          {photos.map((_, photoIndex) => (
            <span
              key={photoIndex}
              className={`indicator ${activePhoto === photoIndex + 1 ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Card Content - hidden on mobile */}
      <div className="property-content">
        {/* Content hidden on mobile per design */}
      </div>
    </div>
  );
};

export default NosLogements;

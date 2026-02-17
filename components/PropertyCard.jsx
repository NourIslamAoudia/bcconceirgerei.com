"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

/**
 * PropertyCard — Client component for interactive photo cycling on hover/scroll.
 * Extracted from NosLogements so the parent section can be a server component.
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
    }, 800);
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

    const scrollWidth = container.scrollWidth;
    const maxScroll = scrollWidth - cardWidth;

    if (scrollLeft >= maxScroll - 10) {
      setTimeout(() => {
        const nextCard = cardRef.current?.nextElementSibling;
        if (nextCard) {
          nextCard.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
          });
        }
      }, 400);
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
      <div
        className="property-photos"
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <div className="photo-wrapper">
          {photos.map((photo, photoIndex) => (
            <Image
              key={photoIndex}
              src={photo}
              alt={`${property.title} location luxe Côte d'Azur - Photo ${photoIndex + 1}`}
              className={`property-photo ${activePhoto === photoIndex + 1 ? "active" : ""}`}
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
              className={`indicator ${activePhoto === photoIndex + 1 ? "active" : ""}`}
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

export default PropertyCard;

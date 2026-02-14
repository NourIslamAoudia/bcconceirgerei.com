'use client';

import React, { useState } from 'react';
import './HeroSection.css';
import ContactFormModal from './ContactFormModal';

/**
 * HeroSection Component — HYBRID (Client for modal state, SSR text via props)
 * Fullscreen background video with dark overlay and centered hero text.
 * Text is passed as props from the server page for SSR/SEO.
 */
const HeroSection = ({ title, subtitle, button, modalTitle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero-section">
      {/* Background Video - Optimized for LCP */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="https://bcconciergerie.com/assets/video-poster.jpg"
        aria-label="Vidéo de présentation B&C Conciergerie - Gestion locative Côte d'Azur"
        title="B&C Conciergerie - Votre conciergerie de luxe sur la Côte d'Azur"
      >
        <source
          src="https://bcconciergerie.com/assets/video-hero.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          {title}
        </h1>
        <p className="hero-subtitle">
          {subtitle}
        </p>
        <button
          className="estimation-button"
          onClick={() => setIsModalOpen(true)}
        >
          {button}
        </button>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      />
    </section>
  );
};

export default HeroSection;

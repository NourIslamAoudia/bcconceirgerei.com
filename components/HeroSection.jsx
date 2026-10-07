import React from "react";
import "./HeroSection.css";
import ContactButton from "./ContactButton";

/**
 * HeroSection Component — SERVER COMPONENT
 * Fullscreen background video with dark overlay and centered hero text.
 * Text is passed as props from the server page for SSR/SEO.
 * The interactive button + modal is delegated to the ContactButton client component.
 */
const HeroSection = ({ title, subtitle, button, modalTitle }) => {
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
        poster="/_next/image?url=https%3A%2F%2Fbcconciergerie.com%2Fassets%2Fnosoffreaccu.jpg&w=1920&q=70"
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
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <ContactButton label={button} modalTitle={modalTitle} />
      </div>
    </section>
  );
};

export default HeroSection;

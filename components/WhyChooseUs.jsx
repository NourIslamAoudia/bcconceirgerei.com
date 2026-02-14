'use client';

import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Image from 'next/image';
import './WhyChooseUs.css';

/**
 * WhyChooseUs Component — HYBRID (Client for framer-motion, SSR text via props)
 * Displays four key benefits of B&C Conciergerie with simple animations.
 * Text is passed as a translations prop from the server page for SSR/SEO.
 */
const WhyChooseUs = ({ translations: t }) => {
  // Simple animation variants
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const cardsContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-columns">
          <motion.div
            className="why-image"
            aria-hidden
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariant}
          >
            <Image
              src="https://bcconciergerie.com/assets/olive.jpg"
              alt="Conciergerie de luxe Côte d'Azur - Gestion locative premium Nice Monaco"
              width={600}
              height={800}
              loading="lazy"
            />
          </motion.div>

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

            <motion.div
              className="benefits-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardsContainer}
            >
              <motion.div className="benefit-card" variants={cardVariant}>
                <span className="benefit-badge" aria-hidden>
                  {/* Shield icon for Sérénité totale */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2L4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3z" fill="currentColor" />
                  </svg>
                </span>
                <h3 className="benefit-title">{t.benefit1Title}</h3>
                <p className="benefit-description">
                  {t.benefit1Desc}
                </p>
              </motion.div>

              <motion.div className="benefit-card" variants={cardVariant}>
                <span className="benefit-badge" aria-hidden>
                  {/* Chart icon for Performance locative */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 17h3v-7H3v7zm6 0h3V7H9v10zm6 0h3v-4h-3v4z" fill="currentColor" />
                  </svg>
                </span>
                <h3 className="benefit-title">{t.benefit2Title}</h3>
                <p className="benefit-description">
                  {t.benefit2Desc}
                </p>
              </motion.div>

              <motion.div className="benefit-card" variants={cardVariant}>
                <span className="benefit-badge" aria-hidden>
                  {/* Star icon for Service premium */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 17.3L5.6 20l1-6.1L2 9.6l6.2-.9L12 3l3.8 5.7 6.2.9-4.6 4.3L18.4 20 12 17.3z" fill="currentColor" />
                  </svg>
                </span>
                <h3 className="benefit-title">{t.benefit3Title}</h3>
                <p className="benefit-description">
                  {t.benefit3Desc}
                </p>
              </motion.div>

              <motion.div className="benefit-card" variants={cardVariant}>
                <span className="benefit-badge" aria-hidden>
                  {/* Location pin for Présence locale */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" fill="currentColor" />
                  </svg>
                </span>
                <h3 className="benefit-title">{t.benefit4Title}</h3>
                <p className="benefit-description">
                  {t.benefit4Desc}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import Image from 'next/image';
import './WelcomeSection.css';
import AnimateInView from './AnimateInView';

/**
 * WelcomeSection Component — SERVER COMPONENT
 * Text content on the left, three photos grid on the right.
 * All text is passed as props from the server page for SSR/SEO.
 */
export default function WelcomeSection({ title, subtitle, description1, description2, description3 }) {
  return (
    <section className="welcome-section">
      <AnimateInView className="welcome-container" threshold={0.12}>
        {/* Left side - Text content */}
        <div className="welcome-text">
          <h2 className="welcome-title">
            {title}
            <br />
            {subtitle}
          </h2>
          <p className="welcome-description">
            {description1}
          </p>
          <p className="welcome-description">
            {description2}
          </p>
          <p className="welcome-description">
            {description3}
          </p>
        </div>

        {/* Right side - Photo grid */}
        <div className="welcome-photos">
          <div className="photo-grid">
            <Image
              src="https://bcconciergerie.com/assets/why1.jpg"
              alt="Conciergerie luxe Nice Monaco - Gestion locative premium"
              className="grid-photo photo-1"
              width={400}
              height={300}
              loading="lazy"
            />
            <Image
              src="https://bcconciergerie.com/assets/why2.jpg"
              alt="Location Airbnb Côte d'Azur - Gestion appartements"
              className="grid-photo photo-2"
              width={400}
              height={300}
              loading="lazy"
            />
            <Image
              src="https://bcconciergerie.com/assets/why3.jpg"
              alt="Gestion de biens Monaco - Conciergerie haut de gamme"
              className="grid-photo photo-3"
              width={400}
              height={300}
              loading="lazy"
            />
            <Image
              src="https://bcconciergerie.com/assets/why4.jpg"
              alt="Location courte durée Nice - Entretien professionnel"
              className="grid-photo photo-4"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </AnimateInView>
    </section>
  );
}

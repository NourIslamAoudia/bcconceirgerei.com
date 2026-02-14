import Image from 'next/image';
import './NosEngagements.css';
import AnimateInView from './AnimateInView';

/**
 * Nos Engagements Section — SERVER COMPONENT
 * Two-column layout: left side with badge, title and checklist; right side with image.
 * All text is passed as props from the server page for SSR/SEO.
 */
export default function NosEngagements({ badge, title, description, item1, item2, item3, item4 }) {
  const items = [item1, item2, item3, item4];

  return (
    <section className="nos-engagements-section">
      <AnimateInView className="nos-engagements-container" threshold={0.15}>
        <div className="nos-engagements-content">
          <div className="engagements-badge">{badge}</div>

          <h2 className="engagements-title">{title}</h2>

          <p className="engagements-desc">{description}</p>

          <div className="engagements-checklist">
            {items.map((text, i) => (
              <div className="checklist-item" key={i}>
                <span className="check-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="currentColor" />
                    <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="checklist-text">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="nos-engagements-image-wrapper">
          <Image
            src="https://bcconciergerie.com/assets/nos enga.jpg"
            alt="Conciergerie haut de gamme Nice Monaco - Services premium gestion locative"
            className="nos-engagements-image"
            width={600}
            height={700}
            loading="lazy"
          />
        </div>
      </AnimateInView>
    </section>
  );
}

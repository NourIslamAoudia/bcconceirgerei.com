import Link from 'next/link';
import './NosOffres.css';
import AnimateInView from './AnimateInView';

/**
 * Nos Offres Section — SERVER COMPONENT
 * Displays two offer cards with links to the offers page.
 * All text is passed as props from the server page for SSR/SEO.
 */
export default function NosOffres({
  title,
  subtitle,
  launchTitle,
  launchBadge,
  launchDesc,
  launchButton,
  partnerTitle,
  partnerDesc,
  partnerButton,
}) {
  return (
    <section className="nos-offres-section">
      <AnimateInView className="nos-offres-container" threshold={0.1}>
        <h2 className="nos-offres-title animate">{title}</h2>
        <p className="nos-offres-subtitle animate">{subtitle}</p>

        <div className="offres-grid animate">
          {/* Offre Lancement Card */}
          <div className="offre-card">
            <div className="offre-icon">
              <span className="offre-emoji" role="img" aria-label="celebration">🎉</span>
            </div>

            <h3 className="offre-title">{launchTitle}</h3>
            <p className="offre-badge">{launchBadge}</p>

            <p className="offre-description">
              {launchDesc}
            </p>

            <Link href="/offres" className="offre-button">{launchButton}</Link>
          </div>

          {/* Offre Partenaire Card */}
          <div className="offre-card">
            <div className="offre-icon">
              <span className="offre-emoji" role="img" aria-label="celebration">🎉</span>
            </div>

            <h3 className="offre-title">{partnerTitle}</h3>

            <p className="offre-description">
              {partnerDesc}
            </p>

            <Link href="/offres" className="offre-button">{partnerButton}</Link>
          </div>
        </div>
      </AnimateInView>
    </section>
  );
}

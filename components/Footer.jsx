import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

/**
 * Footer Component — SERVER COMPONENT
 * All translated text and locale are passed from the server locale layout.
 */
export default function Footer({ locale, translations: t }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="footer-logo">
            <h2 className="logo-text"><span className="brand">B&C</span> Conciergerie</h2>
          </div>
          <p className="footer-tagline">
            {t.tagline}
          </p>
        </div>

        {/* Footer Columns */}
        <div className="footer-columns">
          {/* Column 1: Plan du Site */}
          <div className="footer-column">
            <h3 className="footer-heading">{t.siteMap}</h3>
            <nav className="footer-nav">
              <Link href={`/${locale}`} className="footer-link">{t.home}</Link>
              <Link href={`/${locale}/services`} className="footer-link">{t.services}</Link>
              <Link href={`/${locale}/offres`} className="footer-link">{t.offers}</Link>
              <Link href={`/${locale}/a-propos`} className="footer-link">{t.about}</Link>
              <a href="https://wa.me/+33774061322" target="_blank" rel="noopener noreferrer" className="footer-link">{t.contact}</a>
            </nav>
          </div>

          {/* Column 2: Destinations */}
          <div className="footer-column">
            <h3 className="footer-heading">{t.destinations}</h3>
            <nav className="footer-nav">
              <Link href={`/${locale}#destinations`} className="footer-link">Nice</Link>
              <Link href={`/${locale}#destinations`} className="footer-link">Monaco</Link>
              <Link href={`/${locale}#destinations`} className="footer-link">Villefranche-sur-Mer</Link>
              <Link href={`/${locale}#destinations`} className="footer-link">Cannes</Link>
              <Link href={`/${locale}#destinations`} className="footer-link">Antibes et Juan les Pins</Link>
              <Link href={`/${locale}#destinations`} className="footer-link">Èze et Saint-Jean-Cap-Ferrat</Link>
            </nav>
          </div>

          {/* Column 3: Nous Trouver */}
          <div className="footer-column">
            <h3 className="footer-heading">{t.findUs}</h3>
            <div className="footer-info">
              <p className="footer-text">
                <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="0.8" fill="none" />
                  <circle cx="12" cy="9" r="2.2" fill="currentColor" />
                </svg>
                {t.address}<br />
                06100
              </p>
            </div>
          </div>

          {/* Column 4: Nous Contacter */}
          <div className="footer-column">
            <h3 className="footer-heading">{t.contactUs}</h3>
            <div className="footer-info">
              <a href="mailto:contact@bcconciergerie.com" className="footer-link footer-email">
                <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                </svg>
                contact@bcconciergerie.com
              </a>
              <a href="tel:+33774061322" className="footer-link footer-phone">
                <svg className="footer-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.05.37 2.07.74 3.03a2 2 0 0 1-.45 2.11L8.91 11.09a16 16 0 0 0 6 6l1.23-1.23a2 2 0 0 1 2.11-.45c.96.37 1.98.62 3.03.74A2 2 0 0 1 22 16.92z" fill="currentColor" />
                </svg>
                +33 7 74 06 13 22
              </a>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/bnc_conciergerie06?igsh=NDl6N3I1c2hhY25j&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="social-icon"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-copyright">
            <p>© 2025 B&C Conciergerie. {t.copyright}</p>
          </div>
          <div className="footer-credits">
            <p>Conçu et intégré avec passion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

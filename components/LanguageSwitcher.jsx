'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './LanguageSwitcher.css';

/**
 * LanguageSwitcher Component — URL-Based (SEO-friendly)
 * Uses usePathname() to get the current URL and swaps the locale segment.
 * No React state, no context. The URL change triggers a server re-render.
 */
const LanguageSwitcher = () => {
  const pathname = usePathname();

  // Extract current locale from pathname (e.g., /fr/services → 'fr')
  const segments = pathname.split('/');
  const currentLocale = segments[1] || 'fr';

  // Build the same path but with the other locale
  const switchedPath = (targetLocale) => {
    const newSegments = [...segments];
    newSegments[1] = targetLocale;
    return newSegments.join('/') || '/';
  };

  return (
    <div className="language-switcher">
      <Link
        href={switchedPath('fr')}
        className={`lang-btn ${currentLocale === 'fr' ? 'active' : ''}`}
        aria-label="Passer en Français"
      >
        FR
      </Link>
      <span className="lang-divider">|</span>
      <Link
        href={switchedPath('en')}
        className={`lang-btn ${currentLocale === 'en' ? 'active' : ''}`}
        aria-label="Switch to English"
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitcher;

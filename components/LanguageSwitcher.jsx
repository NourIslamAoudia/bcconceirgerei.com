"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternateBlogSlug } from "@/lib/blogSlugMap";
import "./LanguageSwitcher.css";

/**
 * LanguageSwitcher Component — URL-Based (SEO-friendly)
 * Uses usePathname() to get the current URL and swaps the locale segment.
 * Handles blog slug translation between FR and EN.
 * No React state, no context. The URL change triggers a server re-render.
 */
const LanguageSwitcher = () => {
  const pathname = usePathname();

  // Extract current locale from pathname (e.g., /fr/services → 'fr')
  const segments = pathname.split("/");
  const currentLocale = segments[1] || "fr";

  // Build the same path but with the other locale
  const switchedPath = (targetLocale) => {
    const newSegments = [...segments];
    newSegments[1] = targetLocale;

    // If on a blog detail page (/locale/blog/slug), translate the slug
    if (newSegments[2] === "blog" && newSegments[3]) {
      newSegments[3] = getAlternateBlogSlug(
        segments[3],
        currentLocale,
        targetLocale,
      );
    }

    return newSegments.join("/") || "/";
  };

  return (
    <div className="language-switcher">
      <Link
        href={switchedPath("fr")}
        className={`lang-btn ${currentLocale === "fr" ? "active" : ""}`}
        aria-label="Passer en Français"
      >
        FR
      </Link>
      <span className="lang-divider">|</span>
      <Link
        href={switchedPath("en")}
        className={`lang-btn ${currentLocale === "en" ? "active" : ""}`}
        aria-label="Switch to English"
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitcher;

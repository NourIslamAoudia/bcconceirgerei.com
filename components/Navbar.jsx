"use client";

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

/**
 * Navbar Component — HYBRID (Client for scroll/menu state, SSR text via props)
 * All translated text and locale are passed from the server locale layout.
 */
const Navbar = ({ locale, translations: t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((s) => !s);
  const closeMenu = () => setMenuOpen(false);

  // side effect: add a 'blurred' class to the main content when the drawer is open
  useEffect(() => {
    const main = document.querySelector(".site-main");
    if (!main) return;
    if (menuOpen) main.classList.add("blurred");
    else main.classList.remove("blurred");
    return () => main.classList.remove("blurred");
  }, [menuOpen]);

  useEffect(() => {
    const homeEl = document.querySelector(".home-page");
    const candidates = [
      window,
      document.documentElement,
      document.body,
      homeEl,
    ].filter(Boolean);

    let rafId = 0;

    const getTop = (c) => {
      try {
        if (c === window) return window.scrollY || window.pageYOffset || 0;
        return c.scrollTop || 0;
      } catch (_) {
        return 0;
      }
    };

    let last = null;
    const poll = () => {
      const anyScrolled = candidates.some((c) => getTop(c) > 0);
      if (anyScrolled !== last) {
        last = anyScrolled;
        setScrolled(anyScrolled);
      }
      rafId = requestAnimationFrame(poll);
    };

    poll();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : "transparent"} ${menuOpen ? "menu-open" : ""}`}
    >
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Left section - Menu icon and Logo */}
          <div className="navbar-left">
            <button
              className="menu-icon"
              aria-label="Menu"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="site-drawer"
            >
              <FaBars />
            </button>
            <Link href={`/${locale}`} className="logo">
              <Image
                src="https://bcconciergerie.com/assets/logo.jpg"
                alt="conciergerie logo"
                className="logo-img"
                width={40}
                height={40}
                priority
              />
              <span className="logo-text">conciergerie</span>
            </Link>
          </div>

          {/* Right section */}
          <div className="navbar-right">
            <LanguageSwitcher />
            <a
              href="https://wa.me/+33774061322"
              className="app-button whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
              <span className="whatsapp-text">{t.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>
      {/* Drawer + Backdrop */}
      <div
        className={`nav-backdrop ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      ></div>

      <aside
        id="site-drawer"
        className={`nav-drawer ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="drawer-close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          &times;
        </button>
        <div className="drawer-links">
          <Link href={`/${locale}`} onClick={closeMenu}>
            {t.home}
          </Link>
          <Link href={`/${locale}/services`} onClick={closeMenu}>
            {t.services}
          </Link>
          <Link href={`/${locale}/offres`} onClick={closeMenu}>
            {t.offers}
          </Link>
          <Link href={`/${locale}/a-propos`} onClick={closeMenu}>
            {t.about}
          </Link>
          <Link href={`/${locale}/blog`} onClick={closeMenu}>
            {t.blog}
          </Link>
          <a
            href="https://wa.me/+33774061322"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            {t.contact}
          </a>
        </div>

        <div className="drawer-footer">
          <p className="drawer-contact">
            {t.footerText}
            <br />
            <strong>+33 77 40 61 3 22</strong>
          </p>
          <a
            className="drawer-contact-link"
            href="https://wa.me/+33774061322"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.contactUs}
          </a>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;

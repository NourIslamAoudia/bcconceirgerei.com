'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/locales/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children, initialLanguage = 'fr' }) {
  // The URL locale (/fr, /en) is the source of truth for the language
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage]);

  // Save language to localStorage when it changes
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

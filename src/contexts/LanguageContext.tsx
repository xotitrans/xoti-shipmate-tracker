import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language, DEFAULT_LANGUAGE } from '@/types/language';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  // Initialize language from URL params, localStorage, or default
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Check URL parameters first
    const params = new URLSearchParams(location.search);
    const urlLang = params.get('lang') as Language;
    if (urlLang && ['fr', 'es', 'de', 'it', 'pt'].includes(urlLang)) {
      return urlLang;
    }
    
    // Then check localStorage
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('xoti-language') as Language;
      if (savedLanguage && ['fr', 'es', 'de', 'it', 'pt'].includes(savedLanguage)) {
        return savedLanguage;
      }
    }
    
    return DEFAULT_LANGUAGE;
  });

  // Update language when URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlLang = params.get('lang') as Language;
    if (urlLang && ['fr', 'es', 'de', 'it', 'pt'].includes(urlLang)) {
      setCurrentLanguage(urlLang);
      localStorage.setItem('xoti-language', urlLang);
    }
  }, [location.search]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('xoti-language', language);
    
    // Update URL with new language parameter
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.pushState({}, '', url.toString());
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
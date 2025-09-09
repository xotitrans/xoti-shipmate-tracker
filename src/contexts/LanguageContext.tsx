import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, DEFAULT_LANGUAGE } from '@/types/language';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with saved language or default
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('xoti-language') as Language;
      if (savedLanguage && ['fr', 'es', 'de', 'it', 'pt'].includes(savedLanguage)) {
        return savedLanguage;
      }
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    // Sync with localStorage if not already set
    const savedLanguage = localStorage.getItem('xoti-language') as Language;
    
    if (savedLanguage && ['fr', 'es', 'de', 'it', 'pt'].includes(savedLanguage)) {
      if (currentLanguage !== savedLanguage) {
        setCurrentLanguage(savedLanguage);
      }
    }
  }, [currentLanguage]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('xoti-language', language);
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
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, DEFAULT_LANGUAGE } from '@/types/language';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  initialLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  initialLanguage 
}) => {
  // Initialize with URL language, saved language, or default
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    if (initialLanguage && ['fr', 'es', 'de', 'it', 'pt'].includes(initialLanguage)) {
      return initialLanguage;
    }
    
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('xoti-language') as Language;
      if (savedLanguage && ['fr', 'es', 'de', 'it', 'pt'].includes(savedLanguage)) {
        return savedLanguage;
      }
    }
    return DEFAULT_LANGUAGE;
  });

  // Update language when initialLanguage changes (from URL)
  useEffect(() => {
    if (initialLanguage && ['fr', 'es', 'de', 'it', 'pt'].includes(initialLanguage)) {
      setCurrentLanguage(initialLanguage);
      localStorage.setItem('xoti-language', initialLanguage);
    }
  }, [initialLanguage]);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('xoti-language', language);
    
    // Navigate to the new language URL
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '');
    const newPath = `/${language}${pathWithoutLang || ''}`;
    window.history.pushState({}, '', newPath);
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
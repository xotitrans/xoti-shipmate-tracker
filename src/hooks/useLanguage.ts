import { useState, useEffect } from 'react';
import { Language, DEFAULT_LANGUAGE } from '@/types/language';

export const useLanguage = () => {
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

  return { currentLanguage, changeLanguage };
};
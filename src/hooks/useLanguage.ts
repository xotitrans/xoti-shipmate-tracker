import { useState, useEffect } from 'react';
import { Language, DEFAULT_LANGUAGE } from '@/types/language';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    // Get language from localStorage only
    const savedLanguage = localStorage.getItem('xoti-language') as Language;
    
    if (savedLanguage && ['fr', 'es', 'de', 'it', 'pt'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('xoti-language', language);
    // No URL change - keep the same route
  };

  return { currentLanguage, changeLanguage };
};
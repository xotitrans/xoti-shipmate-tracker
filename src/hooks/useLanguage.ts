import { useState, useEffect } from 'react';
import { Language, DEFAULT_LANGUAGE } from '@/types/language';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    // Get language from localStorage or URL
    const savedLanguage = localStorage.getItem('xoti-language') as Language;
    const urlLanguage = window.location.pathname.split('/')[1] as Language;
    
    if (['fr', 'es', 'de', 'it', 'pt'].includes(urlLanguage)) {
      setCurrentLanguage(urlLanguage);
      localStorage.setItem('xoti-language', urlLanguage);
    } else if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('xoti-language', language);
    
    // Update URL
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '') || '/';
    const newPath = language === 'fr' ? pathWithoutLang : `/${language}${pathWithoutLang}`;
    window.history.pushState({}, '', newPath);
  };

  return { currentLanguage, changeLanguage };
};
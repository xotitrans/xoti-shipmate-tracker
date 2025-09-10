import { useNavigate, useParams } from 'react-router-dom';
import { Language } from '@/types/language';

export const useLanguageNavigation = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const currentLanguage = (lang as Language) || 'fr';

  const navigateWithLanguage = (path: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const fullPath = `/${currentLanguage}${cleanPath ? `/${cleanPath}` : ''}`;
    navigate(fullPath);
  };

  const getLinkWithLanguage = (path: string) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${currentLanguage}${cleanPath ? `/${cleanPath}` : ''}`;
  };

  return {
    navigateWithLanguage,
    getLinkWithLanguage,
    currentLanguage
  };
};
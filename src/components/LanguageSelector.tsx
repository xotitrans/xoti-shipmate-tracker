import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Globe } from 'lucide-react';
import { LANGUAGES } from '@/types/language';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

export const LanguageSelector = () => {
  const { currentLanguage } = useLanguage();
  const { navigateWithLanguage } = useLanguageNavigation();
  
  const currentLangConfig = LANGUAGES.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode: string) => {
    // Get current path without language prefix
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '') || '';
    
    // Navigate to new language
    window.location.href = `/${langCode}${pathWithoutLang}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {currentLangConfig?.flag} {currentLangConfig?.name}
          </span>
          <span className="sm:hidden">{currentLangConfig?.flag}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={language.code === currentLanguage ? 'bg-secondary' : ''}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
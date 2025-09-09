export type Language = 'fr' | 'es' | 'de' | 'it' | 'pt';

export interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
}

export const LANGUAGES: LanguageConfig[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
];

export const DEFAULT_LANGUAGE: Language = 'fr';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en } from '../i18n/en';
import { de } from '../i18n/de';

type Language = 'en' | 'de';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check local storage first
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en' || savedLang === 'de') return savedLang;
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'de') return 'de';
    
    return 'en'; // Default
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const translations: Record<Language, Translations> = { en, de };

  // Helper function to resolve dot-notation paths (e.g. "nav.home")
  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[language];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation missing for key: ${path} in language: ${language}`);
        // Fallback to English if missing in DE
        let fallbackCurrent: any = translations.en;
        for (const fbKey of keys) {
            if (fallbackCurrent && fallbackCurrent[fbKey] !== undefined) fallbackCurrent = fallbackCurrent[fbKey];
            else return path; 
        }
        return fallbackCurrent as string;
      }
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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

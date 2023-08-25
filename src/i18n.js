import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { DEFAULT_LANG } from './consts/langs';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    preload: [DEFAULT_LANG],
    load: 'languageOnly',
    debug: true,
    fallbackLng: DEFAULT_LANG,
    lowerCaseLng: true,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['path', 'localStorage']
    }
  });

export default i18n;
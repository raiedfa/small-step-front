// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpBackend from 'i18next-http-backend';

// i18n
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ['he', 'en', 'ar'],
//     fallbackLng: 'he',
//     debug: false,
//     interpolation: {
//       escapeValue: false,
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/translation.json',
//     },
//   });

// export default i18n;



import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'he',          // ברירת מחדל עברית
    lng: 'he',                  // מתחיל תמיד בעברית
    supportedLngs: ['he', 'en', 'ar'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

export default i18n;






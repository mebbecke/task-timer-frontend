import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { enUS, ptBR } from './locales';

const resources = {
  en: {
    translation: enUS,
  },
  pt: {
    translation: ptBR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  lng: 'pt',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

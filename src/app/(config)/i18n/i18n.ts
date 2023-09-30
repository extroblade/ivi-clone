import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { english, russian } from './translations';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      ru: russian,
      en: english,
    },
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {});

export default i18next;

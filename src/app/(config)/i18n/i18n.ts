import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { English } from '@/app/(config)/i18n/translations/en';
import { Russian } from '@/app/(config)/i18n/translations/ru';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      ru: Russian,
      en: English,
    },
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {});

export default i18next;

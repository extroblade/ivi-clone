import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/newui';
import { languages, LanguageVariants } from '@/shared/constants';
import { useCreateAlert } from '@/shared/hooks/useCreateAlert';

import styles from './switch-language.module.scss';

export const SwitchLanguage = () => {
  const { i18n: i18next, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageVariants>('ru');

  const createAlert = useCreateAlert();
  useEffect(() => {
    const language = localStorage.getItem('language') || 'ru';
    i18next.changeLanguage(language).then(() => {
      localStorage.setItem('language', language);
    });
    setCurrentLanguage(() => language as LanguageVariants);
  }, []);
  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language).then(() => {
      localStorage.setItem('language', language);
    });

    if (currentLanguage === language) {
      return;
    }

    setCurrentLanguage(() => language as LanguageVariants);
    createAlert({
      title: t('title.change-language-title'),
      extra: t('title.change-language-body'),
    });
  };
  return (
    <div className={styles.switcher_container}>
      <div className={styles.switcher}>
        {languages.map((language) => (
          <Button
            key={language}
            className={styles.switcher_item}
            appearance={i18next.language == language ? 'red' : 'rectangle'}
            onClick={() => changeLanguage(language)}
          >
            {language}
          </Button>
        ))}
      </div>
    </div>
  );
};

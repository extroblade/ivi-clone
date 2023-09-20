import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { languages } from '@/constants';
import { createNewAlert } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectModal, setActiveAlerts } from '@/store';
import { Button } from '@/UI';

import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { i18n: i18next } = useTranslation();
  const dispatch = useAppDispatch();
  const { activeAlerts } = useAppSelector(selectModal);
  const [currentLanguage, setCurrentLanguage] = useState('ru');
  useEffect(() => {
    const language = localStorage.getItem('language') || 'ru';
    i18next.changeLanguage(language).then(() => {
      localStorage.setItem('language', language);
    });
    if (language !== currentLanguage) {
      setCurrentLanguage(() => currentLanguage);
    }
  }, []);
  const changeLanguage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    language: 'ru' | 'en'
  ) => {
    e.preventDefault();
    await i18next.changeLanguage(language).then(() => {
      localStorage.setItem('language', language);
    });
    if (language === currentLanguage) {
      return;
    }

    setCurrentLanguage(() => language);

    const { title, extra } =
      language !== 'en'
        ? { title: 'Смена языка', extra: 'Язык был успешно изменен на русский' }
        : { title: 'Language changed', extra: 'Successfully changed language to english' };

    const newAlertList = createNewAlert(title, extra, activeAlerts || undefined);
    dispatch(setActiveAlerts(newAlertList));
  };
  return (
    <div className={styles.switcher_container}>
      <div className={styles.switcher}>
        {languages.map((language) => (
          <Button
            key={language}
            className={styles.switcher_item}
            appearance={i18next.language == language ? 'red' : 'rectangle'}
            onClick={(e) => changeLanguage(e, language)}
          >
            {language}
          </Button>
        ))}
      </div>
    </div>
  );
};

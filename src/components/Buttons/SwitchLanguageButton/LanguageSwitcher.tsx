import React, { useEffect } from 'react';
import i18next from 'i18next';
import styles from './LanguageSwitcher.module.scss';
import { Button } from '@/UI/Button/Button';
const languages = ['ru', 'en'];

const LanguageSwitcher = () => {
  useEffect(() => {
    const language = localStorage.getItem('language') || 'ru';
    i18next.changeLanguage(language).then(() => {
      localStorage.setItem('language', language);
    });
  }, []);
  const changeLanguage = async (e, language) => {
    e.preventDefault();
    await i18next.changeLanguage(language).then(() => {
      localStorage.setItem('language', language);
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
            onClick={(e) => changeLanguage(e, language)}
          >
            {language}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

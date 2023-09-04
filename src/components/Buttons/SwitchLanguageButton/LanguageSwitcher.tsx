import React, { useEffect } from 'react';
import i18next from 'i18next';
import styles from './LanguageSwitcher.module.scss';
import { Button } from '@/UI/Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectModal, setActiveAlerts } from '@/store/reducers/modals.slice';
import { createNewAlert } from '@/helpers/createNewAlert';
const languages = ['ru', 'en'];

const LanguageSwitcher = () => {
  const dispatch = useAppDispatch();
  const { activeAlerts } = useAppSelector(selectModal);
  useEffect(() => {
    const language = localStorage.getItem('language') || 'ru';
    i18next.changeLanguage(language).then(() => {
      localStorage.setItem('language', language);
    });
  }, []);
  const changeLanguage = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    language: string | undefined
  ) => {
    e.preventDefault();
    const title = i18next.language == 'en' ? 'Смена языка' : 'Language changed';
    const extra =
      i18next.language == 'en'
        ? 'Язык был усмешно поменян на русский'
        : 'Successfully changed language to english';
    const newAlertList = createNewAlert(title, extra, activeAlerts || undefined);
    dispatch(setActiveAlerts(newAlertList));
    await i18next.changeLanguage(language).then(() => {
      if (typeof language === 'string') {
        localStorage.setItem('language', language);
      }
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

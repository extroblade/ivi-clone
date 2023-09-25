import React from 'react';
import { useTranslation } from 'react-i18next';

import { Description, Text, Title } from '@/newui';
import styles from '@/newui/description/description.module.scss';

export const MainPageDescription = () => {
  const { t } = useTranslation();
  return (
    <Description title={<Title tag={'h4'}>{t('descriptions.main-page-title')}</Title>}>
      <>
        <Text>{t('descriptions.main-page-cut')}</Text>
        <Text>{t('descriptions.main-page-text0')}</Text>
        <Text>{t('descriptions.main-page-text1')}</Text>
        <ol className={styles.list}>
          <li>
            <Text>{t('descriptions.main-page-text2')}</Text>
          </li>
          <li>
            <Text>{t('descriptions.main-page-text3')}</Text>
          </li>
          <li>
            <Text>{t('descriptions.main-page-text4')}</Text>
          </li>
          <li>
            <Text>{t('descriptions.main-page-text5')}</Text>
          </li>
          <li>
            <Text>{t('descriptions.main-page-text6')}</Text>
          </li>
          <li>
            <Text>{t('descriptions.main-page-text7')}</Text>
          </li>
          <li>
            <Text>{t('descriptions.main-page-text8')}</Text>
          </li>
          <li>
            <Text>{t('descriptions.main-page-text9')}</Text>
          </li>
        </ol>
        <Text>{t('descriptions.main-page-text10')}</Text>
      </>
    </Description>
  );
};

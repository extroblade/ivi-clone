import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/newui';
import { Description, Htag } from '@/UI';
import styles from '@/UI/Description/Description.module.scss';
export const MainPageDescription = () => {
  const { t } = useTranslation();
  return (
    <Description
      title={<Htag tag={'h4'}>{t('descriptions.main-page-title')}</Htag>}
      cut={<Text size={'M'}>{t('descriptions.main-page-cut')}</Text>}
    >
      <>
        <Text size={'M'}>{t('descriptions.main-page-text0')}</Text>
        <Text size={'M'}>{t('descriptions.main-page-text1')}</Text>
        <ol className={styles.list}>
          <li>
            <Text size={'M'}>{t('descriptions.main-page-text2')}</Text>
          </li>
          <li>
            <Text size={'M'}>{t('descriptions.main-page-text3')}</Text>
          </li>
          <li>
            <Text size={'M'}>{t('descriptions.main-page-text4')}</Text>
          </li>
          <li>
            <Text size={'M'}>{t('descriptions.main-page-text5')}</Text>
          </li>
          <li>
            <Text size={'M'}>{t('descriptions.main-page-text6')}</Text>
          </li>
          <li>
            <Text size={'M'}>{t('descriptions.main-page-text7')}</Text>
          </li>
          <li>
            <Text size={'M'}>{t('descriptions.main-page-text8')}</Text>
          </li>
          <li>
            <Text size={'M'}>{t('descriptions.main-page-text9')}</Text>
          </li>
        </ol>
        <Text size={'M'}>{t('descriptions.main-page-text10')}</Text>
      </>
    </Description>
  );
};

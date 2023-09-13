import React from 'react';
import { useTranslation } from 'react-i18next';

import { Description, Htag, P } from '@/UI';
import styles from '@/UI/Description/Description.module.scss';

export const MainPageDescription = () => {
  const { t } = useTranslation();
  return (
    <Description
      title={<Htag tag={'h4'}>{t('descriptions.main-page-title')}</Htag>}
      cut={<P size={'M'}>{t('descriptions.main-page-cut')}</P>}
    >
      <>
        <P size={'M'}>{t('descriptions.main-page-text0')}</P>
        <P size={'M'}>{t('descriptions.main-page-text1')}</P>
        <ol className={styles.list}>
          <li>
            <P size={'M'}>{t('descriptions.main-page-text2')}</P>
          </li>
          <li>
            <P size={'M'}>{t('descriptions.main-page-text3')}</P>
          </li>
          <li>
            <P size={'M'}>{t('descriptions.main-page-text4')}</P>
          </li>
          <li>
            <P size={'M'}>{t('descriptions.main-page-text5')}</P>
          </li>
          <li>
            <P size={'M'}>{t('descriptions.main-page-text6')}</P>
          </li>
          <li>
            <P size={'M'}>{t('descriptions.main-page-text7')}</P>
          </li>
          <li>
            <P size={'M'}>{t('descriptions.main-page-text8')}</P>
          </li>
          <li>
            <P size={'M'}>{t('descriptions.main-page-text9')}</P>
          </li>
        </ol>
        <P size={'M'}>{t('descriptions.main-page-text10')}</P>
      </>
    </Description>
  );
};

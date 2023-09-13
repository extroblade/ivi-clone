import React from 'react';
import { useTranslation } from 'react-i18next';

import { Htag, P } from '@/UI';

import styles from './NotFound.module.scss';

export const NotFound = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={styles.content}>
      <div className={styles.content__row}>
        <Htag tag={'h2'}>{t('descriptions.error')}</Htag>
        <P>{t('descriptions.page-doesnt-exist')}</P>
      </div>
    </div>
  );
};

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { P } from '@/UI';
import styles from '@/UI/Card/Card.module.scss';

export const ShowAll: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={`${styles.imageSection} ${styles.show}`}>
        <P>{t('buttons.show-all')}</P>
      </div>
    </div>
  );
};

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineBellAlert } from 'react-icons/hi2';

import styles from './Notifications.module.scss';

export const Notifications: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className={styles.alerts__content}>
      <HiOutlineBellAlert className={styles.alerts__icon} />
      <p>{t('categories.notifications-text')}</p>
    </div>
  );
};

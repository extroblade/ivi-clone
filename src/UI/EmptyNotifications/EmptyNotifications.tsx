import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineBellAlert } from 'react-icons/hi2';

import { BackButton } from '@/components';
import { Htag, P } from '@/UI';

import styles from './EmptyNotifications.module.scss';

export const EmptyNotifications: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <BackButton />
      <Htag tag="h2">{t('buttons.notifications-stocks')}</Htag>
      <div className={styles.row}>
        <HiOutlineBellAlert className={styles.icon} />
        <P size="L" color="gray-light">
          {t('categories.notifications-text')}
        </P>
      </div>
    </>
  );
};

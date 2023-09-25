import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiOutlineBellAlert } from 'react-icons/hi2';

import { BackButton } from '@/features/back-button';
import { Text } from '@/newui';
import { Title } from '@/UI';

import styles from './no-notifications.module.scss';

export const NoNotifications: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <BackButton />
      <Title tag="h2">{t('buttons.notifications-stocks')}</Title>
      <div className={styles.row}>
        <HiOutlineBellAlert className={styles.icon} />
        <Text size="L" color="gray-light">
          {t('categories.notifications-text')}
        </Text>
      </div>
    </>
  );
};

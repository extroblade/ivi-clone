import { useTranslation } from 'react-i18next';
import { HiOutlineBellAlert } from 'react-icons/hi2';

import { Text } from '@/shared/ui';

import styles from './no-notifications.module.scss';

export const NoNotifications = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.row}>
      <HiOutlineBellAlert className={styles.icon} />
      <Text size="L" color="gray-light">
        {t('categories.notifications-text')}
      </Text>
    </div>
  );
};

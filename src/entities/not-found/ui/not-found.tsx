import { useTranslation } from 'react-i18next';

import { Text } from '@/newui';
import { Title } from '@/UI';

import styles from './not-found.module.scss';

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.content_container}>
      <div className={styles.content}>
        <Title tag={'h2'}>{t('descriptions.error')}</Title>
        <Text>{t('descriptions.page-doesnt-exist')}</Text>
      </div>
    </div>
  );
};

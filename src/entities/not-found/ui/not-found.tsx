import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Text, Title } from '@/shared/ui';

import styles from './not-found.module.scss';

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.content_container}>
      <div className={styles.content}>
        <Link href={'/'}>
          <Title tag={'h2'}>{t('descriptions.error')}</Title>
          <Text>{t('descriptions.page-doesnt-exist')}</Text>
        </Link>
      </div>
    </div>
  );
};

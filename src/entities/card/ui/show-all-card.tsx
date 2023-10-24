import cn from 'classnames';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Text } from '@/shared/ui';

import styles from './card.module.scss';

export const ShowAllCard = ({ link }: { link?: string }) => {
  const { t } = useTranslation();
  return (
    <Link href={link || '#'} className={styles.card}>
      <div className={cn(styles.imageSection, styles.show)}>
        <Text>{t('buttons.show-all')}</Text>
      </div>
      <div className={styles.textSection} />
    </Link>
  );
};

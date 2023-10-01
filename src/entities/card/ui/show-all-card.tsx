import cn from 'classnames';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import styles from '@/entities/card/ui/card.module.scss';
import { Text } from '@/newui';

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

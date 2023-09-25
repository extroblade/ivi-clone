import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import styles from '@/entities/card/ui/card.module.scss';
import { Text } from '@/newui';

export const ShowAllCard = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={cn(styles.imageSection, styles.show)}>
        <Text>{t('buttons.show-all')}</Text>
      </div>
    </div>
  );
};

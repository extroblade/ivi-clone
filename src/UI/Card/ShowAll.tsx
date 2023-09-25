import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Text } from '@/newui';
import styles from '@/UI/Card/Card.module.scss';

export const ShowAll = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <div className={cn(styles.imageSection, styles.show)}>
        <Text>{t('buttons.show-all')}</Text>
      </div>
    </div>
  );
};

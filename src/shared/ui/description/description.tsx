import cn from 'classnames';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { useBooleanState } from '@/shared/hooks';
import { Button } from '@/shared/ui';

import styles from './description.module.scss';

export const Description = ({ children }: { children: ReactNode[] | ReactNode }) => {
  const [isOpen, { handleToggle }] = useBooleanState();
  const { t } = useTranslation();

  return (
    <div className={styles.description}>
      <div className={cn(!isOpen && styles.cut)}>{children}</div>
      <Button size={'S'} appearance={'transparent'} onClick={handleToggle}>
        {isOpen ? t('descriptions.close-btn') : t('descriptions.open-btn')}
      </Button>
    </div>
  );
};

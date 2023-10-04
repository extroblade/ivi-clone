import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/newui';
import { useBooleanState } from '@/shared/hooks';

import styles from './description.module.scss';
import { DescriptionProps } from './description.props';

export const Description: FC<DescriptionProps> = ({ children }): JSX.Element => {
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

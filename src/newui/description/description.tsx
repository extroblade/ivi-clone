import cn from 'classnames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/newui';

import styles from './description.module.scss';
import { DescriptionProps } from './description.props';

export const Description: FC<DescriptionProps> = ({ children }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const toggleState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.description}>
      <div className={cn(!isOpen && styles.cut)}>{children}</div>
      <Button size={'S'} appearance={'transparent'} onClick={toggleState}>
        {isOpen ? t('descriptions.close-btn') : t('descriptions.open-btn')}
      </Button>
    </div>
  );
};

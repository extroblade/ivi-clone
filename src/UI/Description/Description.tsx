import cn from 'classnames';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/newui';

import styles from './Description.module.scss';
import { DescriptionProps } from './Description.props';

export const Description: FC<DescriptionProps> = ({ title, cut, children }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div className={styles.description}>
      {title}
      <div className={cn(!isOpen && styles.first)}>
        {cut}
        <span style={{ display: isOpen ? 'inherit' : 'none' }}>{children}</span>
      </div>
      <Button size={'S'} appearance={'transparent'} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? t('descriptions.close-btn') : t('descriptions.open-btn')}
      </Button>
    </div>
  );
};

import cn from 'classnames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/newui';
import { DescriptionProps } from '@/newui/description/description.props';

import styles from './description.module.scss';

export const Description: FC<DescriptionProps> = ({ title, children }): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const toggleState = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.description}>
      {title}
      <div className={cn(!isOpen && styles.first)}>{children}</div>
      <Button size={'S'} appearance={'transparent'} onClick={toggleState}>
        {isOpen ? t('descriptions.close-btn') : t('descriptions.open-btn')}
      </Button>
    </div>
  );
};

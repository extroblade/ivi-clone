import { FC } from 'react';

import { Button } from '@/newui';

import styles from './ProfileButton.module.scss';
import { ProfileButtonProps } from './ProfileButtons.props';

export const ProfileButton: FC<ProfileButtonProps> = ({ type, icon, children, onClick }) => {
  const IconComponent: any = icon;
  return (
    <Button className={styles[type]} onClick={() => onClick?.()}>
      {icon && <IconComponent />}
      {children}
    </Button>
  );
};

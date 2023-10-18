import { FC } from 'react';

import { Button } from '@/shared/ui';

import { ProfileButtonProps } from '../model/props';
import styles from './profile-button.module.scss';

export const ProfileButton: FC<ProfileButtonProps> = ({
  type = 'rect',
  icon,
  children,
  onClick,
}) => {
  const IconComponent: any = icon;
  return (
    <Button className={type && styles[type]} onClick={() => onClick?.()}>
      {icon && <IconComponent />}
      {children}
    </Button>
  );
};

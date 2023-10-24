import { ReactNode } from 'react';
import { IconType } from 'react-icons';

import { Button } from '@/shared/ui';

import styles from './profile-button.module.scss';

export const ProfileButton = ({
  type = 'rect',
  icon,
  children,
  onClick,
}: {
  icon?: IconType;
  children?: ReactNode | ReactNode[];
  type?:
    | 'rect'
    | 'square_icon'
    | 'rect_icon'
    | 'rect_icon_light'
    | 'rect_icon_purple'
    | 'rect_text';
  onClick?: () => void;
}) => {
  const IconComponent: any = icon;
  return (
    <Button className={type && styles[type]} onClick={() => onClick?.()}>
      {icon && <IconComponent />}
      {children}
    </Button>
  );
};

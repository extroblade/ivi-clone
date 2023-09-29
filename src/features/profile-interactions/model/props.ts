import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type ProfileButtonVariants =
  | 'square_icon'
  | 'rect_icon'
  | 'rect_icon_light'
  | 'rect_icon_purple'
  | 'rect_text';

export type ProfileButtonProps = {
  icon?: IconType;
  children?: ReactNode | ReactNode[];
  type?: ProfileButtonVariants;
  onClick?: () => void;
};

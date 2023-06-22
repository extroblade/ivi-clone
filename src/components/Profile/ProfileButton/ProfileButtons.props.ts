import { IconType } from 'react-icons';
import { ReactNode } from 'react';

export interface iPB {
  type: 'square_icon' | 'rect_icon' | 'rect_icon_light' | 'rect_icon_purple' | 'rect_text';
}

export interface ICardButtons extends iPB {
  icon?: IconType;
  children?: ReactNode;
  onClick?: () => void;
}

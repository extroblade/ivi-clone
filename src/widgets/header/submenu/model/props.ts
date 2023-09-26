import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type SubmenuProps = {
  icon?: IconType;
  user?: string | null;
  title?: ReactNode;
  link?: string;
  outline?: boolean;
  children: ReactNode;
};

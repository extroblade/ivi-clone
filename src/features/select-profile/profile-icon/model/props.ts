import { ReactNode } from 'react';

export type ProfileIconProps = {
  image?: ReactNode;
  name?: string | null;
  isActive?: boolean;
  onClick?: () => void;
};

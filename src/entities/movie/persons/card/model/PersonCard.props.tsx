import { ReactNode } from 'react';

export interface PersonCardProps {
  children: ReactNode | ReactNode[];
  title?: string;
  link?: string;
}

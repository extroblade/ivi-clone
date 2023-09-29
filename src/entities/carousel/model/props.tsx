import { ReactNode } from 'react';
import { Settings } from 'react-slick';

export interface Props {
  title?: string;
  route?: string;
  movies?: unknown[];
  settings?: Settings;
  showAll?: boolean;
  hover?: boolean;
  children?: ReactNode | ReactNode[];
}

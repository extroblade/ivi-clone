import { ReactNode } from 'react';
import { Settings } from 'react-slick';

export interface Props {
  title?: string;
  route?: string;
  settings?: Settings;
  children?: ReactNode | ReactNode[];
}

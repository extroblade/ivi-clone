import { ReactNode } from 'react';
import { Settings } from 'react-slick';

export interface CarouselProps {
  title?: string;
  route?: string;
  settings?: Settings;
  children?: ReactNode | ReactNode[];
  showAll?: boolean;
}

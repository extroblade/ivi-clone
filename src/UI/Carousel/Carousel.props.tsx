import { Settings } from 'react-slick';

export interface CarouselProps {
  title?: string;
  route?: string;
  movies?: unknown[];
  settings?: Settings;
  hover?: boolean;
}

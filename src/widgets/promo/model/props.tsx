import { Settings } from 'react-slick';

import { Next } from '@/features/arrow/ui/next';
import { Prev } from '@/features/arrow/ui/prev';

export type PromoCarouselProps = {
  id: number;
  name: string;
  description: string;
  enDescription: string;
  logo: string | null;
  card_image: string;
  btn: string;
};

export const carouselSettings: Settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 300,
  draggable: true,
  autoplay: true,
  autoplaySpeed: 10000,
  nextArrow: <Next variant="promo" />,
  prevArrow: <Prev variant="promo" />,
};

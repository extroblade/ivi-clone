import { Settings } from 'react-slick';

import { PromoNextArrow } from '@/widgets/promo/arrow/ui/promo-next-arrow';
import { PromoPrevArrow } from '@/widgets/promo/arrow/ui/promo-prev-arrow';

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
  speed: 700,
  draggable: true,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <PromoNextArrow />,
  prevArrow: <PromoPrevArrow />,
};

import { Settings } from 'react-slick';

import { PromoNextArrow, PromoPrevArrow } from '@/widgets/promo/arrow';

export const carouselSettings: Settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 700,
  draggable: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  nextArrow: <PromoNextArrow />,
  prevArrow: <PromoPrevArrow />,
  responsive: [],
};

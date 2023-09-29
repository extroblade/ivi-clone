import { Settings } from 'react-slick';

import { NextArrow } from '@/components/Buttons/Arrows/NextArrow';
import { PrevArrow } from '@/components/Buttons/Arrows/PrevArrow';

export const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  draggable: true,
  lazyLoad: 'progressive',
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

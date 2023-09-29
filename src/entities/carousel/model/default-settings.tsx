import { Settings } from 'react-slick';

import { NextArrow } from '@/components/Buttons/Arrows/NextArrow';
import { PrevArrow } from '@/components/Buttons/Arrows/PrevArrow';

export const defaultSettings: Settings = {
  dots: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  draggable: true,
  lazyLoad: 'progressive',
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1095,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 510,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 390,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};

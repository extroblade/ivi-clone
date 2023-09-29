import { Settings } from 'react-slick';

import { Next } from '@/features/arrow/ui/next';
import { Prev } from '@/features/arrow/ui/prev';

export const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  draggable: true,
  lazyLoad: 'progressive',
  slidesToScroll: 1,
  nextArrow: <Next />,
  prevArrow: <Prev />,
  responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 880,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 390,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

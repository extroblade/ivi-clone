import { Settings } from 'react-slick';

import { Next, Prev } from '@/features/arrow';

export const settings: Settings = {
  dots: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 5,
  draggable: true,
  lazyLoad: 'progressive',
  slidesToScroll: 4,
  nextArrow: <Next />,
  prevArrow: <Prev />,
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

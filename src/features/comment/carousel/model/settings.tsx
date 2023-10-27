import { Settings } from 'react-slick';

export const settings: Settings = {
  slidesToShow: 4,
  slidesToScroll: 2,
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

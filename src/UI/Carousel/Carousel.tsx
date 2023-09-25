import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from 'next/link';
import React, { FC } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import Slider, { Settings } from 'react-slick';

import { NextArrow } from '@/components/Buttons/Arrows/NextArrow';
import { PrevArrow } from '@/components/Buttons/Arrows/PrevArrow';
import { Card, ShowAllCard } from '@/entities/card';
import { Loader, Title } from '@/newui';
import { CarouselProps } from '@/UI/Carousel/Carousel.props';

import styles from './Carousel.module.scss';

export const Carousel: FC<CarouselProps> = ({
  title,
  hover = true,
  route,
  movies,
  settings,
}): JSX.Element => {
  if (!settings)
    settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      draggable: true,
      lazyLoad: 'progressive',
      slidesToScroll: 6,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
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
    } as Settings;
  if (!movies) return <Loader />;
  return (
    <div className={styles.carousel}>
      {title && (
        <div className={styles.title}>
          <Link href={route || ''} className={styles.title_container}>
            <div title={title}>
              <Title tag={'h4'}>{title}</Title>
            </div>
            <MdArrowForwardIos />
          </Link>
        </div>
      )}
      <Slider {...settings}>
        {(movies?.length ? movies : [...new Array(15)]).slice(0, 15).map((card, index) => (
          <Card card={card} hover={hover} star book find block key={card?.id || index} />
        ))}
        {movies?.length > 15 && (
          <Link href={route || '/movies'}>
            <ShowAllCard />
          </Link>
        )}
      </Slider>
    </div>
  );
};

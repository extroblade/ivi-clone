import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Slider, { Settings } from 'react-slick';

import { NextArrow, PrevArrow } from '@/components';
import { TOP_100_POPULAR_FILMS } from '@/constants';
import { useFetchTopFilmQuery } from '@/shared/services';
import { iFilm } from '@/shared/types/kinopoiskTypes';
import { Htag } from '@/UI';

import styles from './Top10Carousel.module.scss';
import { T10Card } from './Top10CarouselCard';

export const Top10Carousel: FC = () => {
  const { t } = useTranslation();
  const { data } = useFetchTopFilmQuery({ type: TOP_100_POPULAR_FILMS });
  const settings: Settings = {
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

  return (
    <div className={styles.carousel}>
      <div className={styles.title}>
        <Link href={'/movies'}>
          <Image src={'/images/top10/top10.svg'} width={116} height={24} alt={'top10'} />
        </Link>
        <Link href={'/movies'}>
          <Htag tag={'h3'}>{t('sections.during-week')}</Htag>
        </Link>
      </div>
      <Slider {...settings}>
        {(data?.films ? data.films.slice(0, 10) : new Array(10).fill(0)).map(
          (card: iFilm, index: number) => (
            <T10Card card={card} index={index} key={index} />
          )
        )}
      </Slider>
    </div>
  );
};

import React, { FC } from 'react';
import NextArrow from '@/UI/Carousel/Arrows/NextArrow';
import PrevArrow from '@/UI/Carousel/Arrows/PrevArrow';
import styles from './Top10Carousel.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import { Htag } from '@/UI/Htag/Htag';
import { useTranslation } from 'react-i18next';
import { T10Card } from './Top10CarouselCard';
import top10 from '../../../../public/images/top10/top10.svg';
import Link from 'next/link';
import { useFetchTopFilmQuery } from '@/services/movie.api';
import { TOP_100_POPULAR_FILMS } from '@/constants/TopMoviesTypes';
import { iFilm } from '@/types/kinopoiskTypes';

const Top10Carousel: FC = () => {
  const { t } = useTranslation();
  const { data } = useFetchTopFilmQuery({ type: TOP_100_POPULAR_FILMS });
  const settings = {
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
          <Image src={top10} alt={'top10'} />
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

export default Top10Carousel;

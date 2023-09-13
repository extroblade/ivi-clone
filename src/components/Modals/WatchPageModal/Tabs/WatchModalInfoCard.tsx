import Image from 'next/image';
import React from 'react';

import styles from '@/components/Modals/WatchPageModal/WatchPageModal.module.scss';
import { countTime } from '@/helpers';
import { useAppSelector } from '@/hooks';
import { selectModal } from '@/store';
import { BarGraph } from '@/UI';
import { P } from '@/UI/P/P';

export const WatchModalInfoCard = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const { posterUrl, ratingKinopoisk, year, countries, genres, duration, filmLength } =
    currentMovie;
  return (
    <div className={styles.movie}>
      <Image
        width={128}
        height={196}
        onClick={() => close()}
        className={styles.movie__img}
        src={posterUrl}
        alt=""
      />
      <div className={styles.movie__info}>
        <div className={styles.graphs}>
          <span>{ratingKinopoisk}</span>
          <div className={styles.graphs__wrap}>
            <BarGraph width={80} />
            <BarGraph width={73} />
            <BarGraph width={62} />
            <BarGraph width={98} />
          </div>
        </div>
        <P size="S" className={styles.movie__descr}>
          {year && `${year}, `}
          {countries?.length ? countries.map((country) => `${country.country}, `) : ''}
          {genres?.length ? genres.map((genre) => `${genre.genre}, `) : ''}
          {filmLength && countTime(filmLength)}
        </P>
        <P size="S">{duration}</P>
      </div>
    </div>
  );
};

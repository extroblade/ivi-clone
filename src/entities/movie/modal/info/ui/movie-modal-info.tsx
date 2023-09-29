import Image from 'next/image';
import React from 'react';

import { BarGraph, Text } from '@/newui';
import { countTime } from '@/shared/helpers';
import { useAppSelector } from '@/shared/hooks';
import { selectModal } from '@/shared/store';

import styles from './movie-modal-info.module.scss';

export const MovieModalInfo = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const { posterUrl, ratingKinopoisk, year, countries, genres, duration, filmLength } =
    currentMovie || {};
  return (
    <div className={styles.movie}>
      <Image
        width={128}
        height={196}
        onClick={() => close()}
        className={styles.movie__img}
        src={posterUrl || ''}
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
        <Text size="S" className={styles.movie__descr}>
          {year && `${year}, `}
          {countries?.length ? countries.map((country) => `${country.country}, `) : ''}
          {genres?.length ? genres.map((genre) => `${genre.genre}, `) : ''}
          {filmLength && countTime(filmLength)}
        </Text>
        <Text size="S">{duration}</Text>
      </div>
    </div>
  );
};

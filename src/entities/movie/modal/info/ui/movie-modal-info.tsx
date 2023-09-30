import Image from 'next/image';

import { BarGraph, Text } from '@/newui';
import { countTime } from '@/shared/helpers';
import { useAppSelector } from '@/shared/hooks';
import { selectModal } from '@/shared/store';

import styles from './movie-modal-info.module.scss';

export const MovieModalInfo = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const { posterUrl, ratingKinopoisk, year, countries, genres, filmLength } = currentMovie || {};
  return (
    <div className={styles.movie}>
      {posterUrl && (
        <Image
          width={128}
          height={196}
          className={styles.movie__img}
          src={posterUrl}
          alt="poster"
        />
      )}
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
        <Text size="M" color={'gray'}>
          {year && `${year}, `}
          {countries?.length ? countries.map((country) => `${country.country}, `) : ''}
          {genres?.length ? genres.map((genre) => `${genre.genre}, `) : ''}
          {filmLength && countTime(filmLength)}
        </Text>
      </div>
    </div>
  );
};

import Link from 'next/link';
import React, { FC } from 'react';

import { PersonList } from '@/components';
import { countTime } from '@/shared/helpers';
import { iFilm } from '@/shared/types/kinopoiskTypes';
import { Explanations, MovieOptions, MovieTitle, RatingBlock } from '@/UI';

import styles from './MovieInfo.module.scss';

interface iMovieInfo {
  movie: iFilm;
}

export const MovieInfo: FC<iMovieInfo> = ({ movie }) => {
  const {
    kinopoiskId,
    year,
    countries,
    ratingKinopoisk,
    ratingKinopoiskVoteCount,
    genres,
    filmLength,
    nameEn,
    nameOriginal,
    nameRu,
  } = movie;

  return (
    <div className={styles.watch__info}>
      <div className={styles.watch__title}>
        <MovieTitle enFilmName={nameEn || nameOriginal} filmName={nameRu || nameOriginal} />
      </div>
      <div className={styles.watch__params}>
        <ul className={styles.info_list}>
          {year && <div className={styles.info_item}>{year}</div>}
          <div className={styles.info_item}>{countTime(filmLength)}</div>
        </ul>
        <ul className={styles.info_list}>
          {countries?.length &&
            countries.map((country, index) => (
              <div key={index} className={`${styles.info_item} ${styles.item_hasDot}`}>
                <Link href={'/movies'}>{country.country}</Link>
              </div>
            ))}
          {genres?.length &&
            genres.map((genre, index) => (
              <div key={index} className={`${styles.info_item} ${styles.item_hasDot}`}>
                <Link href={'/movies'}>{genre.genre}</Link>
              </div>
            ))}
        </ul>
      </div>
      <div className={styles.watch__rating}>
        <PersonList rating={ratingKinopoisk} />
      </div>
      <Explanations factsId={kinopoiskId} />
      <MovieOptions movie={movie} />
      <RatingBlock
        rating={ratingKinopoisk}
        rates={ratingKinopoiskVoteCount}
        criteria={'выдающиеся актеры'}
      />
    </div>
  );
};

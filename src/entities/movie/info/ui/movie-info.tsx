import i18next from 'i18next';
import Link from 'next/link';
import { FC } from 'react';

import { Explanations } from '@/entities/explanations';
import { MovieOptions } from '@/entities/movie/options/ui/movie-options';
import { PersonList } from '@/entities/movie/persons/list/ui/person-list';
import { RatingBlock } from '@/features/rating-block';
import { Title } from '@/newui';
import { countTime } from '@/shared/helpers';
import { localizeName } from '@/shared/helpers/localize-name';
import { iFilm } from '@/shared/types/kinopoiskTypes';

import styles from './movie-info.module.scss';

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
  } = movie;

  return (
    <div className={styles.watch__info}>
      <div className={styles.watch__title}>
        <Title tag="h2">
          {i18next.language == 'en'
            ? `Movie ${localizeName(movie)} watch online`
            : `Фильм ${localizeName(movie)} смотреть онлайн`}
        </Title>
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

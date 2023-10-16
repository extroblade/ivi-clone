import cn from 'classnames';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, useCallback, useMemo } from 'react';

import { Explanations } from '@/entities/explanations';
import { useMovieTitle } from '@/entities/movie/lib/useMovieTitle';
import { MovieOptions } from '@/entities/movie/options';
import { PersonList } from '@/entities/movie/persons';
import { RatingBlock } from '@/features/rating-block';
import { Title } from '@/newui';
import { getPathByType } from '@/shared/constants';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { useFetchFilmFiltersQuery } from '@/shared/services';

import { MovieInfoProps } from '../model/props';
import styles from './movie-info.module.scss';

export const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
  const {
    kinopoiskId,
    year,
    type,
    countries,
    ratingKinopoisk,
    ratingKinopoiskVoteCount,
    genres,
    filmLength,
  } = movie;
  const movieName = useLocalizeName(movie);
  const title = useMovieTitle(movieName);

  const { data: filters } = useFetchFilmFiltersQuery();
  const findGenre = useCallback(
    (name: string) => {
      return filters?.genres?.find(({ genre }) => genre === name)?.id;
    },
    [filters]
  );
  const findCountry = useCallback(
    (name: string) => {
      return filters?.countries?.find(({ country }) => country === name)?.id;
    },
    [filters]
  );
  const duration = useMemo(() => {
    const dur = dayjs.duration(filmLength, 'minutes').format('H:mm:ss');
    if (!filmLength) {
      return;
    }
    return dur;
  }, [filmLength]);
  return (
    <div className={styles.watch__info}>
      <div className={styles.watch__title}>
        <Title tag="h2">{title}</Title>
      </div>
      <div className={styles.watch__params}>
        <ul className={styles.info_list}>
          {year && <div className={styles.info_item}>{year},</div>}
          {duration && <div className={styles.info_item}>{duration}</div>}
        </ul>
        <ul className={styles.info_list}>
          {countries?.map(({ country }, index) => (
            <div key={index} className={cn(styles.info_item, styles.item_hasDot)}>
              <Link href={`${getPathByType(type)}?country=${findCountry(country)}`}>{country}</Link>
            </div>
          ))}
          {genres?.map(({ genre }, index) => (
            <div key={index} className={cn(styles.info_item, styles.item_hasDot)}>
              <Link href={`${getPathByType(type)}?genre=${findGenre(genre)}`}>{genre}</Link>
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

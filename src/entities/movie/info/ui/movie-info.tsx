import cn from 'classnames';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Explanations } from '@/entities/explanations';
import { MovieOptions } from '@/entities/movie/options';
import { PersonList } from '@/entities/movie/persons/list/ui/person-list';
import { RatingBlock } from '@/features/rating-block';
import { Title } from '@/newui';
import { movieTypes } from '@/shared/constants';
import { localizeName } from '@/shared/helpers/localize-name';
import { useFetchFilmFiltersQuery } from '@/shared/services';

import { MovieInfoProps } from '../model/props';
import styles from './movie-info.module.scss';

export const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
  const { i18n } = useTranslation();
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

  const { data: filters, isLoading } = useFetchFilmFiltersQuery();

  return (
    <div className={styles.watch__info}>
      <div className={styles.watch__title}>
        <Title tag="h2">
          {i18n.language == 'en'
            ? `Movie "${localizeName(movie)}" watch online`
            : `Фильм "${localizeName(movie)}" смотреть онлайн`}
        </Title>
      </div>
      <div className={styles.watch__params}>
        <ul className={styles.info_list}>
          {year && <div className={styles.info_item}>{year},</div>}
          <div className={styles.info_item}>
            {dayjs.duration(filmLength, 'minutes').format('H:mm:ss')}
          </div>
        </ul>
        <ul className={styles.info_list}>
          {!isLoading &&
            countries?.map(({ country, id }) => (
              <div key={id} className={cn(styles.info_item, styles.item_hasDot)}>
                {!isLoading ? (
                  <Link
                    href={`${movieTypes[type].path}?country=${
                      filters?.countries.find((item) => item.country == country)?.id
                    }`}
                  >
                    {country}
                  </Link>
                ) : (
                  <div className={'loader'} />
                )}
              </div>
            ))}
          {genres?.map(({ genre, id }) => (
            <div key={id} className={cn(styles.info_item, styles.item_hasDot)}>
              {!isLoading ? (
                <Link
                  href={`${movieTypes[type].path}?genre=${
                    filters?.genres.find(({ genre: item }) => item == genre)?.id
                  }`}
                >
                  {genre}
                </Link>
              ) : (
                <div className={'loader'} />
              )}
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

import cn from 'classnames';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useCallback, useMemo } from 'react';

import { Explanations } from '@/entities/explanations';
import { Player } from '@/entities/player';
import { OpenTrailersButton } from '@/entities/player/actions';
import { AddToFavoritesButton } from '@/features/add-movie-to-favorites';
import { RatingBlock } from '@/features/rating-block';
import { ShareButton } from '@/features/share-button/ui/share-button';
import { TurnNotificationsButton } from '@/features/turn-notifications';
import { getPathByType } from '@/shared/constants';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { useFetchFilmFiltersQuery } from '@/shared/services';
import { iFilm } from '@/shared/types/kinopoiskTypes';
import { Title } from '@/shared/ui';
import { MovieOptions, useMovieTitle } from '@/widgets/movie';
import { PersonList } from '@/widgets/movie/persons';

import styles from './movie-info.module.scss';

export const MovieInfo = ({ movie }: { movie: iFilm }) => {
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
    if (!filmLength) {
      return;
    }
    return dayjs.duration(filmLength, 'minutes').format('H:mm:ss');
  }, [filmLength]);
  return (
    <div className={styles.row}>
      <Title className={styles.mobile_title} tag="h2">
        {title}
      </Title>
      <Player
        actions={
          <>
            <OpenTrailersButton appearance={'rectangle'} />
            <AddToFavoritesButton appearance={'rectangle'} />
            <TurnNotificationsButton appearance={'rectangle'} />
            <ShareButton appearance={'rectangle'} />
          </>
        }
      />
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
                <Link href={`${getPathByType(type)}?country=${findCountry(country)}`}>
                  {country}
                </Link>
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
    </div>
  );
};

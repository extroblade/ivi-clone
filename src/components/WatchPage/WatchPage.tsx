import React, { FC, useEffect } from 'react';

import { PersonsGallery, Trailers } from '@/components';
import { ExternalSources } from '@/entities/external-sources';
import { WatchOnAllDevices } from '@/entities/watch-on-all-devices';
import { ScrollToTopButton } from '@/features/scroll-to-top';
import { useAppDispatch } from '@/shared/hooks';
import {
  useFetchAllPersonsQuery,
  useFetchFilmAwardsQuery,
  useFetchFilmSimilarQuery,
  useFetchFilmVideoQuery,
} from '@/shared/services';
import { setCurrentMovie } from '@/shared/store';
import {
  CommentCarousel,
  MovieBGContainer,
  MovieInfo,
  MovieTitle,
  Player,
  SimilarMovies,
} from '@/UI';

import styles from './WatchPage.module.scss';
import { WatchPageProps } from './WatchPage.props';

export const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { data: persons } = useFetchAllPersonsQuery({ filmId: movie.kinopoiskId });
  const { data: awards } = useFetchFilmAwardsQuery({ id: movie.kinopoiskId });
  const { data: videos } = useFetchFilmVideoQuery({ id: movie.kinopoiskId });
  const { data: similar } = useFetchFilmSimilarQuery({ id: movie.kinopoiskId });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentMovie({ ...movie, persons, awards, videos, index: 0 }));
  }, [dispatch, movie.kinopoiskId, persons, awards, videos]);

  const { nameRu, nameEn, nameOriginal, posterUrl, coverUrl } = movie;
  const title = nameRu || nameEn || nameOriginal || '';
  const cover = coverUrl || posterUrl || '';
  const trailerYT = videos?.items.find((video) => video.site == 'YOUTUBE')?.url;
  return (
    <>
      <MovieBGContainer movie={movie} />
      <section className={styles.watch}>
        <div className={styles.watch__content}>
          <div className={styles.watch__row}>
            <div className={styles.mobile_title}>
              <MovieTitle enFilmName={nameEn || nameOriginal} filmName={nameRu || nameOriginal} />
            </div>
            <div className={styles.watch__player}>
              <Player url={trailerYT} actions />
            </div>
            <MovieInfo movie={movie} />
          </div>
        </div>
        <ExternalSources id={movie.kinopoiskId} />
        <SimilarMovies similar={similar} />
        <PersonsGallery list={persons} />
        <ScrollToTopButton />
        <CommentCarousel />
        <Trailers videos={videos} />
        <WatchOnAllDevices name={title} image={cover} />
      </section>
    </>
  );
};

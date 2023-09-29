import i18next from 'i18next';
import React, { FC, useEffect } from 'react';

import { MovieBGContainer } from '@/entities/colored-container/ui/MovieBGContainer';
import { ExternalSources } from '@/entities/external-sources';
import { MovieInfo } from '@/entities/movie/info/ui/MovieInfo';
import { PersonsGallery } from '@/entities/movie/persons/gallery/ui/PersonsGallery';
import { Trailers } from '@/entities/movie/trailers/ui/Trailers';
import { Player } from '@/entities/player/ui/Player';
import { WatchOnAllDevices } from '@/entities/watch-on-all-devices';
import { CommentCarousel } from '@/features/comment/carousel/ui/CommentCarousel';
import { ScrollToTopButton } from '@/features/scroll-to-top';
import { Title } from '@/newui';
import { localizeName } from '@/shared/helpers/localize-name';
import { useAppDispatch } from '@/shared/hooks';
import {
  useFetchAllPersonsQuery,
  useFetchFilmSimilarQuery,
  useFetchFilmVideoQuery,
} from '@/shared/services';
import { setCurrentMovie } from '@/shared/store';
import { SimilarMovies } from '@/widgets/similar-movies/ui/SimilarMovies';

import { WatchPageProps } from '../model/WatchPage.props';
import styles from './WatchPage.module.scss';

export const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { posterUrl, coverUrl, kinopoiskId } = movie;

  const { data: persons } = useFetchAllPersonsQuery({
    filmId: kinopoiskId,
  });
  const { data: videos } = useFetchFilmVideoQuery({
    id: kinopoiskId,
  });
  const { data: similar } = useFetchFilmSimilarQuery({ id: kinopoiskId });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentMovie(movie));
  }, [kinopoiskId]);

  const trailerYT = videos?.items.find((video) => video.site == 'YOUTUBE')?.url;
  return (
    <>
      <MovieBGContainer movie={movie} />
      <section className={styles.watch}>
        <div className={styles.watch__content}>
          <div className={styles.watch__row}>
            <div className={styles.mobile_title}>
              <Title tag="h2">
                {i18next.language == 'en'
                  ? `Movie ${localizeName(movie)} watch online`
                  : `Фильм ${localizeName(movie)} смотреть онлайн`}
              </Title>
            </div>
            <div className={styles.watch__player}>
              <Player url={trailerYT} actions />
            </div>
            <MovieInfo movie={movie} />
          </div>
        </div>
        <ExternalSources id={kinopoiskId} />
        <SimilarMovies similar={similar} />
        <PersonsGallery list={persons} />
        <ScrollToTopButton />
        <CommentCarousel />
        <Trailers videos={videos} />
        <WatchOnAllDevices name={localizeName(movie)} image={coverUrl || posterUrl} />
      </section>
    </>
  );
};

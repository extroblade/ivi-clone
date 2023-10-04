import i18next from 'i18next';
import React, { FC, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ColorContainer } from '@/entities/colored-container/ui/color-container';
import { ExternalSources } from '@/entities/external-sources';
import { MovieInfo } from '@/entities/movie/info/ui/movie-info';
import { PersonsGallery } from '@/entities/movie/persons/gallery/ui/persons-gallery';
import { Trailers } from '@/entities/movie/trailers/ui/trailers';
import { Player } from '@/entities/player/ui/player';
import { WatchOnAllDevices } from '@/entities/watch-on-all-devices';
import { CommentCarousel } from '@/features/comment/carousel/ui/CommentCarousel';
import { ScrollToTopButton } from '@/features/scroll-to-top';
import { Breadcrumbs, Title } from '@/newui';
import { movieTypes } from '@/shared/constants';
import { localizeName } from '@/shared/helpers/localize-name';
import { useAppDispatch } from '@/shared/hooks';
import {
  useFetchAllPersonsQuery,
  useFetchFilmFiltersQuery,
  useFetchFilmSimilarQuery,
  useFetchFilmVideoQuery,
} from '@/shared/services';
import { setCurrentMovie } from '@/shared/store';
import { SimilarMovies } from '@/widgets/similar-movies/ui/SimilarMovies';

import { WatchPageProps } from '../model/WatchPage.props';
import styles from './WatchPage.module.scss';

export const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { posterUrl, coverUrl, kinopoiskId } = movie;
  const { i18n } = useTranslation();
  const { data: filters } = useFetchFilmFiltersQuery();

  const { typeRuName, typeEnName, typePath } = useMemo(() => {
    return {
      typeRuName: movieTypes[movie.type]?.ruName || 'Тип',
      typeEnName: movieTypes[movie.type]?.enName || 'Type',
      typePath: movieTypes[movie.type]?.path || '/movies',
    };
  }, [movie.type]);
  const breadcrumbs = [
    { name: i18n?.language == 'en' ? typeEnName : typeRuName, path: typePath },
    {
      name: movie?.genres?.[0]?.genre || 'Жанр',
      path: `${typePath}?genre=${
        filters?.genres?.find(({ genre }) => genre == movie?.genres?.[0]?.genre)?.id
      }`,
    },
  ];

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

  const trailerYT = useMemo(() => {
    return videos?.items.find((video) => video.site == 'YOUTUBE')?.url;
  }, [videos?.items.length]);
  return (
    <>
      <Breadcrumbs variant={'movie'} breadcrumbs={breadcrumbs} />
      <ColorContainer movie={movie} />
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

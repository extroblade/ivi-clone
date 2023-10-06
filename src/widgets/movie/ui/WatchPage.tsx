import i18next from 'i18next';
import { FC, useMemo } from 'react';

import { ColorContainer } from '@/entities/colored-container';
import { ExternalSources } from '@/entities/external-sources';
import { MovieInfo } from '@/entities/movie/info/ui/movie-info';
import { useMovieTitle } from '@/entities/movie/lib/useMovieTitle';
import { PersonsGallery } from '@/entities/movie/persons/gallery/ui/persons-gallery';
import { Trailers } from '@/entities/movie/trailers/ui/trailers';
import { Player } from '@/entities/player/ui/player';
import { WatchOnAllDevices } from '@/entities/watch-on-all-devices';
import { CommentCarousel } from '@/features/comment/carousel/ui/CommentCarousel';
import { ScrollToTopButton } from '@/features/scroll-to-top';
import { Breadcrumbs, Title } from '@/newui';
import { getNameByType, getPathByType } from '@/shared/constants';
import { useFilterId } from '@/shared/hooks/useFilterId';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import {
  useFetchAllPersonsQuery,
  useFetchFilmSimilarQuery,
  useFetchFilmVideoQuery,
} from '@/shared/services';
import { SimilarMovies } from '@/widgets/similar-movies/ui/SimilarMovies';

import { WatchPageProps } from '../model/WatchPage.props';
import styles from './WatchPage.module.scss';

export const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { posterUrl, coverUrl, genres, type, kinopoiskId: id } = movie;
  const { typeName, typePath } = useMemo(() => {
    return {
      typeName: getNameByType(type),
      typePath: getPathByType(type),
    };
  }, [type, i18next.language]);

  const { data: persons } = useFetchAllPersonsQuery({
    filmId: id,
  });
  const { data: videos } = useFetchFilmVideoQuery({ id });
  const { data: similar } = useFetchFilmSimilarQuery({ id });

  const trailerYT = useMemo(() => {
    return videos?.items.find((video) => video.site == 'YOUTUBE')?.url;
  }, [videos?.items]);
  const movieName = useLocalizeName(movie);
  const title = useMovieTitle(movieName);
  const { genreId } = useFilterId(genres?.[0]?.genre);
  const breadcrumbs = useMemo(() => {
    return [
      { name: typeName, path: typePath },
      {
        name: genres?.[0]?.genre || 'Жанр',
        path: `${typePath}?genre=${genreId}`,
      },
    ];
  }, [movie, i18next.language]);
  return (
    <>
      <Breadcrumbs variant={'movie'} breadcrumbs={breadcrumbs} />
      <ColorContainer movie={movie} />
      <section className={styles.watch}>
        <div className={styles.watch__content}>
          <div className={styles.watch__row}>
            <div className={styles.mobile_title}>
              <Title tag="h2">{title}</Title>
            </div>
            <div className={styles.watch__player}>
              <Player url={trailerYT} actions />
            </div>
            <MovieInfo movie={movie} />
          </div>
        </div>
        <ExternalSources id={id} />
        <SimilarMovies similar={similar} />
        <PersonsGallery list={persons} />
        {movie?.kinopoiskId && <ScrollToTopButton />}

        <CommentCarousel />
        <Trailers videos={videos} />
        <WatchOnAllDevices name={movieName || 'Loading...'} image={coverUrl || posterUrl} />
      </section>
    </>
  );
};

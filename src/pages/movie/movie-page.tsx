import Head from 'next/head';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ColorContainer } from '@/entities/colored-container';
import { ExternalSources } from '@/entities/external-sources';
import { MovieInfo } from '@/entities/movie/info/ui/movie-info';
import { useMovieTitle } from '@/entities/movie/lib/useMovieTitle';
import { PersonsGallery } from '@/entities/movie/persons/gallery';
import { SimilarCarousel } from '@/entities/movie/similar/similar-carousel';
import { Trailers } from '@/entities/movie/trailers/ui/trailers';
import { WatchOnAllDevices } from '@/entities/watch-on-all-devices';
import { CommentCarousel } from '@/features/comment/carousel/ui/CommentCarousel';
import { ScrollToTopButton } from '@/features/scroll-to-top';
import { LanguageVariants, movieTypes } from '@/shared/constants';
import { useFilterId } from '@/shared/hooks/useFilterId';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { iFilm } from '@/shared/types/kinopoiskTypes';
import { Breadcrumbs } from '@/shared/ui';

export const MoviePage: FC<{ movie: iFilm }> = ({ movie }) => {
  const { i18n } = useTranslation();
  const { posterUrl, coverUrl, posterUrlPreview, genres, type, kinopoiskId } = movie;
  const { typeName, typePath } = useMemo(() => {
    return {
      typeName: movieTypes?.[type]?.[i18n.language as LanguageVariants] || 'Movie',
      typePath: movieTypes?.[type]?.path || '/movies',
    };
  }, [type, i18n.language]);

  const movieName = useLocalizeName(movie);
  const title = useMovieTitle(movieName);
  const { genreId } = useFilterId(genres?.[0]?.genre);
  const breadcrumbs = useMemo(() => {
    const genrePath = `${typePath}?genre=${genreId}`;
    return [
      { name: typeName, path: typePath },
      { name: genres?.[0]?.genre || 'Жанр', path: genrePath },
    ];
  }, [movie, i18n.language]);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Breadcrumbs variant={'movie'} breadcrumbs={breadcrumbs} />
      <ColorContainer />
      <MovieInfo movie={movie} />
      <ExternalSources />
      <SimilarCarousel />
      <PersonsGallery />
      <CommentCarousel />
      {kinopoiskId && <ScrollToTopButton />}
      <Trailers />
      <WatchOnAllDevices
        name={movieName || 'Loading...'}
        image={coverUrl || posterUrl || posterUrlPreview}
      />
    </>
  );
};

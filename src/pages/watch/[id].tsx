import React from 'react';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import { useTranslation } from 'react-i18next';
import MovieBreadcrumbs from '@/components/Breadcrumbs/MovieBreadcrumbs';
import Loader from '@/components/Loader/Loader';
import NotFound from '@/components/NotFound/NotFound';

const Movie = ({ movie }) => {
  const { t, i18n } = useTranslation();
  if (!movie?.id) return <NotFound />;
  const genres = movie?.genres?.length ? movie?.genres[0] : '';
  const breadcrumbs = [
    { name: t('sections.movies'), path: '/movies' }, //t('sections.series') t('sections.animation')
    {
      name:
        (i18n.language == 'ru'
          ? genres || genres[0]?.genreName
          : genres[0]?.genreNameEn || genres) || 'Жанры',
      path: '/movies',
    },
  ];
  return (
    <>
      <Head>
        <title>
          {i18n.language == 'en'
            ? `Movie ${movie?.originalTitle || movie?.enName}`
            : `Фильм ${movie?.title || movie?.name}`}
        </title>
      </Head>
      <MovieBreadcrumbs breadcrumbs={breadcrumbs} />
      {!movie?.id ? <Loader /> : <WatchPage movie={movie} />}
    </>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    const res = await fetch(`${process.env.SERVER}/film/${id - 1}`);
    const movie = await res.json();

    console.log(`Fetched movie: ${movie.name}`);
    return { props: { movie } };
  } catch (e) {
    return { props: { movie: null } };
  }
}

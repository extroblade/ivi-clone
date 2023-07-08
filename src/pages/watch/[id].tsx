import React from 'react';
import Head from 'next/head';
import WatchPage from '@/components/WatchPage/WatchPage';
import { useTranslation } from 'react-i18next';
import MovieBreadcrumbs from '@/UI/Breadcrumbs/MovieBreadcrumbs';
import NotFound from '@/UI/NotFound/NotFound';
import { iFilm } from '@/types/kinopoiskTypes';
import { movieTypes } from '@/constants/Movies';

const Movie = ({ movie }) => {
  const { i18n } = useTranslation();
  if (!movie?.kinopoiskId) return <NotFound />;
  const typeRuName = movieTypes[movie?.type]?.ruName || 'Тип';
  const typeEnName = movieTypes[movie?.type]?.enName || 'Type';
  const typePath = movieTypes[movie?.type]?.path || '/movies';
  const genre = movie?.genres[0]?.genre || 'Жанр';
  const breadcrumbs = [
    { name: i18n?.language == 'en' ? typeEnName : typeRuName, path: typePath },
    {
      name: genre,
      path: '/movies', //todo: fix
    },
  ];
  return (
    <>
      <Head>
        <title>
          {i18n.language == 'en'
            ? `Movie ${movie?.nameEn ? movie.nameEn : ''}`
            : `Фильм ${movie?.nameRu ? movie.nameRu : ''}`}
        </title>
      </Head>
      <MovieBreadcrumbs breadcrumbs={breadcrumbs} />
      <WatchPage movie={movie} />
    </>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;

    const movie: iFilm = await fetch(`${process.env.API}v2.2/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.X_API_KEY,
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    console.log(`Fetched movie: ${movie.nameRu}`);
    return { props: { movie } };
  } catch (e) {
    return { props: { movie: null } };
  }
}

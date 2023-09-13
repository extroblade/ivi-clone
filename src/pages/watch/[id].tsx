import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { WatchPage } from '@/components';
import { movieTypes } from '@/constants';
import { iFilm } from '@/types/kinopoiskTypes';
import { MovieBreadcrumbs, NotFound } from '@/UI';

const Movie = ({ movie }: { movie: iFilm & any }) => {
  const { i18n } = useTranslation();
  const typeMovie = new Map(Object.entries(movieTypes));
  if (!movie) return <NotFound />;

  const typeRuName = typeMovie.get(movie.type)?.ruName || 'Тип';
  const typeEnName = typeMovie.get(movie.type)?.enName || 'Type';
  const typePath = typeMovie.get(movie.type)?.path || '.movies';

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

export async function getServerSideProps(context: { query: { id: any } }) {
  try {
    const { id } = context.query;

    const movie: iFilm = await fetch(`${process.env.API || ''}v2.2/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.X_API_KEY || '',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    console.log(`Fetched movie: ${movie.nameRu}`);
    return { props: { movie } };
  } catch (e) {
    return { props: { movie: null } };
  }
}

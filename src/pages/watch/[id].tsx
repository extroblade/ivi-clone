import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { movieTypes } from '@/constants';
import { NotFound } from '@/entities/not-found';
import { Breadcrumbs } from '@/newui';
import { localizeName } from '@/shared/helpers/localize-name';
import { iFilm } from '@/shared/types/kinopoiskTypes';
import { WatchPage } from '@/widgets/movie/ui/WatchPage';

const Movie = ({ movie }: { movie: iFilm }) => {
  const { i18n } = useTranslation();
  if (!movie) return <NotFound />;

  const typeRuName = movieTypes[movie.type]?.ruName || 'Тип';
  const typeEnName = movieTypes[movie.type]?.enName || 'Type';
  const typePath = movieTypes[movie.type]?.path || '/movies';

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
          {i18n.language == 'en' ? `Movie ${localizeName(movie)}` : `Фильм ${localizeName(movie)}`}
        </title>
      </Head>
      <Breadcrumbs variant={'movie'} breadcrumbs={breadcrumbs} />
      <WatchPage movie={movie} />
    </>
  );
};

export default Movie;

export async function getServerSideProps(context: { query: { id: any } }) {
  try {
    const { id } = context.query;

    const movie: iFilm = await fetch(`${process.env.API}v2.2/films/${id}`, {
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

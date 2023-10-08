import Head from 'next/head';

import { NotFound } from '@/entities/not-found';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { iFilm, iSimilar } from '@/shared/types/kinopoiskTypes';

type MovieProps = {
  movie: iFilm;
  similar: iSimilar;
};
const Movie = ({ movie, similar }: MovieProps) => {
  const movieName = useLocalizeName(movie);
  if (!movie) return <NotFound />;

  return (
    <>
      <Head>
        <title> movies similar to {movieName}</title>
      </Head>
      movies similar to {movieName}:<div>{JSON.stringify(similar)}</div>
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
    const similar: iFilm = await fetch(`${process.env.API}v2.2/films/${id}/similars`, {
      method: 'GET',
      headers: {
        'X-API-KEY': process.env.X_API_KEY || '',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    return { props: { movie, similar } };
  } catch (e) {
    return { props: { movie: null } };
  }
}

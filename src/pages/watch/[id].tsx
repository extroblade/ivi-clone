import Head from 'next/head';

import { useMovieTitle } from '@/entities/movie/lib/useMovieTitle';
import { NotFound } from '@/entities/not-found';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { iFilm } from '@/shared/types/kinopoiskTypes';
import { WatchPage } from '@/widgets/movie/ui/WatchPage';

type MovieProps = {
  movie: iFilm;
};
const Movie = ({ movie }: MovieProps) => {
  const movieName = useLocalizeName(movie);
  const title = useMovieTitle(movieName);
  if (!movie) return <NotFound />;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
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

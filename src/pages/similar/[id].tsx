import Head from 'next/head';
import Link from 'next/link';

import { Card } from '@/entities/card';
import { NotFound } from '@/entities/not-found';
import { AddToFavoritesButton } from '@/features/add-movie-to-favorites';
import { Title } from '@/newui';
import { Grid } from '@/newui/grid/grid';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { iFilm, iSimilar } from '@/shared/types/kinopoiskTypes';

type MovieProps = {
  movie: iFilm;
  similar: iSimilar;
};
const Movie = ({ movie, similar }: MovieProps) => {
  const movieName = useLocalizeName(movie);
  if (!movie) return <NotFound />;
  if (!similar?.total) return <Title>Nothing found!</Title>;
  return (
    <>
      <Head>
        <title>Фильмы, которые ищут вместе с &quot;{movieName}&quot;</title>
      </Head>
      <Title>
        Фильмы, которые ищут вместе с&nbsp;
        <Link href={`/watch/${movie.kinopoiskId}`}>&quot;{movieName}&quot;</Link>
      </Title>
      <Grid>
        {similar?.items?.map((movie, index) => (
          <Card card={movie} key={index} buttons={<AddToFavoritesButton />} />
        ))}
      </Grid>
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

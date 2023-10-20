import Head from 'next/head';
import Link from 'next/link';

import { Card } from '@/entities/card';
import { AddToFavoritesButton } from '@/features/add-movie-to-favorites';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { iFilm, iSimilar } from '@/shared/types/kinopoiskTypes';
import { Grid, Title } from '@/shared/ui';

type MovieProps = {
  movie: iFilm;
  similar: iSimilar;
};

export const SimilarPage = ({ movie, similar }: MovieProps) => {
  const movieName = useLocalizeName(movie);
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

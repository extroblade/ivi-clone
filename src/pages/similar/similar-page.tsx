import Head from 'next/head';
import Link from 'next/link';
import { AddToFavoritesButton } from 'src/features/buttons/add-movie-to-favorites';

import { Card } from '@/entities/card';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { iFilm, iSimilar } from '@/shared/types/kinopoiskTypes';
import { Grid, Title } from '@/shared/ui';

export const SimilarPage = ({ movie, similar }: { movie: iFilm; similar: iSimilar }) => {
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

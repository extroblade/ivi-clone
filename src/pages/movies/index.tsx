import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { MoviesDescription } from '@/entities/descriptions';
import { Breadcrumbs, Title } from '@/newui';
import { useFetchFilmFiltersQuery } from '@/shared/services';
import { Filters } from '@/widgets/filter';
import { MovieGrid } from '@/widgets/grid';

const Movies = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: filters } = useFetchFilmFiltersQuery();
  const initialBreadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t('sections.movies'), path: '/movies' },
  ];
  const [breadcrumbs, setBreadcrumbs] = useState(initialBreadcrumbs);
  useEffect(() => {
    if (!router?.query?.genre) {
      setBreadcrumbs(() => initialBreadcrumbs);
      return;
    }
    const genre = filters?.genres.find(({ id }) => id == router?.query?.genre)?.genre;
    if (!genre) {
      return;
    }
    setBreadcrumbs(() => [
      ...initialBreadcrumbs,
      {
        name: genre,
        path: `/movies?genre=${router?.query?.genre}`,
      },
    ]);
  }, [filters?.genres, router?.query]);
  return (
    <>
      <Head>
        <title>{t('title.movies')}</title>
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.movies-page-title')}</Title>

      <MoviesDescription />
      <Filters />
      <MovieGrid type={'FILM'} />
    </>
  );
};

export default Movies;

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useFetchFilmFiltersQuery } from '@/shared/services';

export const useBreadcrumbs = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: filters } = useFetchFilmFiltersQuery();

  const initialBreadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t(`sections.${router.pathname.split('').splice(1).join('')}`), path: router.pathname },
  ];
  const [breadcrumbs, setBreadcrumbs] = useState(initialBreadcrumbs);
  useEffect(() => {
    const newBreadcrumbs = [...initialBreadcrumbs];

    const genre = filters?.genres.find(({ id }) => id == router?.query?.genre)?.genre;

    const country = filters?.countries.find(({ id }) => id == router?.query?.country)?.country;

    if (genre) {
      newBreadcrumbs.push({
        name: genre,
        path: `/movies?genre=${router?.query?.genre}`,
      });
    }
    if (country) {
      newBreadcrumbs.push({
        name: country,
        path: `/movies?country=${router?.query?.country}`,
      });
    }

    if (genre && country) {
      newBreadcrumbs.push({
        name: '',
        path: ``,
      });
    }

    setBreadcrumbs(() => newBreadcrumbs);
  }, [filters?.genres, router?.query]);

  return breadcrumbs;
};

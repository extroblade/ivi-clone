import { useMemo } from 'react';

import { useFetchFilmFiltersQuery } from '@/shared/services';

export const useFilterId = (name: string): { genreId: number; countryId: number } => {
  const { data: filters } = useFetchFilmFiltersQuery();
  const genreId = useMemo(() => {
    return filters?.genres?.find(({ genre }) => genre == name)?.id;
  }, [filters?.genres]);

  const countryId = useMemo(() => {
    return filters?.countries?.find(({ country }) => country == name)?.id;
  }, [filters?.countries]);
  return { genreId: Number(genreId), countryId: Number(countryId) };
};

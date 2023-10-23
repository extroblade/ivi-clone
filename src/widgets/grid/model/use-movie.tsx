import cn from 'classnames';
import { useInView } from 'framer-motion';
import { useRouter } from 'next/router';
import { RefObject, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useScrollTop } from '@/features/scroll-to-top/lib';
import { QueryParams, useFetchAllFilmsQuery } from '@/shared/services';
import { FilmOrderVariants, FilmTypeVariants, iFilm } from '@/shared/types/kinopoiskTypes';
import { Button } from '@/shared/ui';
import styles from '@/widgets/grid/ui/grid.module.scss';

export const useMovie = (type: FilmTypeVariants, buttonRef: RefObject<HTMLButtonElement>) => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const scrollTop = useScrollTop();
  const isInView = useInView(buttonRef);
  const { t } = useTranslation();

  const params: QueryParams = useMemo(
    () => ({
      type,
      page,
      yearTo: Number(router?.query?.year) || 3000,
      yearFrom: Number(router?.query?.year) || 1000,
      ratingFrom: Number(router?.query?.ratingFrom) || 0,
      ratingTo: 10,
      order: (router?.query?.order as FilmOrderVariants) || '',
      genres: Number(router?.query?.genre) || '',
      countries: Number(router?.query?.country) || '',
    }),
    [router.query, page]
  );
  const { data, isFetching, isLoading, error } = useFetchAllFilmsQuery(params);

  useEffect(() => {
    setPage(() => 1);
    scrollTop?.();
  }, [router.query]);

  const showMore = () => {
    if (!data?.totalPages || page >= data?.totalPages) {
      return;
    }
    setPage((page) => page + 1);
  };
  const [movies, setMovies] = useState<iFilm[]>([]);
  useEffect(() => {
    if (!data?.items || isFetching) {
      return;
    }
    if (page === 1) {
      setMovies(() => data?.items);
      return;
    }
    const filteredData = data?.items.filter(
      //api can send same data from different pages -> keys error
      (item) => !movies.map(({ kinopoiskId }) => kinopoiskId).includes(item.kinopoiskId)
    );
    setMovies(() => [...movies, ...filteredData]);
  }, [page, data]);

  useEffect(() => {
    if (!isInView) {
      return;
    }
    showMore();
  }, [isInView]);
  const isLoader = (!data?.total && isFetching && page < 2) || false;
  const isOver = (data?.total && data?.totalPages > page) || false;
  const isNothingFound = (data?.total === 0 && !isLoading) || false;
  const showMoreButton = () => {
    return (
      <>
        {isOver && (
          <Button
            disabled={isFetching}
            appearance={'outline'}
            className={cn(styles.open, isFetching && 'loader')}
            onClick={showMore}
          >
            {t('buttons.show-more')}
          </Button>
        )}
      </>
    );
  };
  return {
    movies: movies || Array(15).fill(1),
    showMoreButton,
    isLoader,
    page,
    isFetching,
    isNothingFound,
    error,
  };
};

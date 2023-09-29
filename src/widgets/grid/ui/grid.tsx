import cn from 'classnames';
import { useInView } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@/entities/card';
import { Button, Loader, Title } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { QueryParams, useFetchAllFilmsQuery } from '@/shared/services';
import { selectFilters } from '@/shared/store';
import { iFilm } from '@/shared/types/kinopoiskTypes';

import { GridProps } from '../model/props';
import styles from './grid.module.scss';

export const Grid: FC<GridProps> = ({ type }) => {
  const [page, setPage] = useState(1);
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef);
  const { genre, yearTo, country, order, ratingTo, ratingFrom } = useAppSelector(selectFilters);
  const params: QueryParams = {
    type,
    page,
    yearTo,
    yearFrom: yearTo,
    ratingTo: +ratingTo,
    countries: country?.id,
    genres: genre?.id,
    order,
    ratingFrom: +ratingFrom,
  };
  useEffect(() => {
    setPage(() => 1);
  }, [genre, yearTo, ratingFrom, country]);
  const { data, isFetching, isLoading } = useFetchAllFilmsQuery(params);

  const { t } = useTranslation();
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
    } else {
      const filteredData = data?.items.filter(
        //api can send same data from different pages -> keys error
        (item) => !movies.map((movie) => movie.kinopoiskId).includes(item.kinopoiskId)
      );
      setMovies(() => [...movies, ...filteredData]);
    }
  }, [page, data]);

  useEffect(() => {
    if (isInView) {
      showMore();
    }
  }, [isInView]);
  return (
    <>
      <div className={styles.grid}>
        {(data?.total && isFetching && <Loader />) || ''}
        {(movies?.length && (
          <div className={styles.grid__container}>
            <ul className={styles.grid__list}>
              {movies.map((card, index) => (
                <li className={styles.grid_item} key={card?.kinopoiskId || index}>
                  <Card card={card} star book find block />
                </li>
              ))}
            </ul>
          </div>
        )) ||
          ''}
      </div>
      <div className={styles.nodata}>
        {isLoading && <Loader />}
        {data?.total === 0 && <Title tag={'h2'}>Ничего не найдено</Title>}
      </div>
      <div ref={buttonRef}>
        {data?.total
          ? data?.totalPages > page && (
              <Button
                disabled={isFetching}
                appearance={'outline'}
                className={cn(styles.open, isFetching && 'loader')}
                onClick={showMore}
              >
                {t('buttons.show-more')}
              </Button>
            )
          : ''}
      </div>
    </>
  );
};

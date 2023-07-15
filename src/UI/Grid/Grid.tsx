import React, { FC, useEffect, useState } from 'react';
import styles from './Grid.module.scss';
import { useTranslation } from 'react-i18next';
import Card from '@/UI/Card/Card';
import { Button } from '@/UI/Button/Button';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Loader from '@/UI/Loader/Loader';
import { useAppSelector } from '@/hooks/redux';
import { selectFilters } from '@/store/reducers/filters.slice';
import { Htag } from '@/UI/Htag/Htag';

interface iGrid {
  type: string;
}

const Grid: FC<iGrid> = ({ type }) => {
  const [page, setPage] = useState(1);
  const { genre, yearTo, country, yearFrom, order, ratingTo, ratingFrom } =
    useAppSelector(selectFilters);
  const params = {
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
  }, [genre, yearTo, country, yearFrom, page]);
  const { data, isLoading: loadingData } = useFetchAllFilmsQuery({ ...params });

  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const showMore = async () => {
    await setIsLoading(() => true);
    if (page < data?.totalPages) {
      await setPage((page) => page + 1);
    }
    await setTimeout(() => {
      setIsLoading(() => false);
    }, 800);
  };
  const [movies, setMovies] = useState<any[]>([]);
  useEffect(() => {
    if (data?.items) {
      if (page > 1) {
        setMovies(() => [...movies, ...data?.items]);
      } else {
        setMovies(() => data?.items);
      }
    }
  }, [data?.items, data, data?.total]);
  return (
    <>
      <div className={styles.grid}>
        {!isLoading && movies?.length ? (
          <div className={styles.grid__container}>
            <ul className={styles.grid__list}>
              {movies.map((card, index) => (
                <li className={styles.grid_item} key={card?.id || index}>
                  <Card card={card} star book find block />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={styles.nodata}>
        {(data?.total === undefined || loadingData) && <Loader />}
        {data?.total === 0 ? <Htag tag={'h2'}>Ничего не найдено</Htag> : ''}
      </div>
      {data?.total
        ? data?.totalPages > page &&
          (isLoading ? (
            <div className={`${styles.open} loader`}></div>
          ) : (
            <Button appearance={'outline'} className={styles.open} onClick={showMore}>
              {t('buttons.show-more')}
            </Button>
          ))
        : ''}
    </>
  );
};

export default Grid;

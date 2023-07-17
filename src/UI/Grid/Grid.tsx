import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Grid.module.scss';
import { useTranslation } from 'react-i18next';
import Card from '@/UI/Card/Card';
import { Button } from '@/UI/Button/Button';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Loader from '@/UI/Loader/Loader';
import { useAppSelector } from '@/hooks/redux';
import { selectFilters } from '@/store/reducers/filters.slice';
import { Htag } from '@/UI/Htag/Htag';
import { useInView } from 'framer-motion';

interface iGrid {
  type: string;
}

const Grid: FC<iGrid> = ({ type }) => {
  const [page, setPage] = useState(1);
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef);
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
  }, [genre, yearTo, country, yearFrom]);
  const { data, isLoading } = useFetchAllFilmsQuery({ ...params });

  const { t } = useTranslation();
  const showMore = () => {
    if (page < data?.totalPages) {
      setPage((page) => page + 1);
    }
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
  }, [page, data]);

  useEffect(() => {
    if (isInView) {
      showMore();
    }
  }, [isInView]);
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
        {(data?.total === undefined || isLoading) && <Loader />}
        {data?.total === 0 ? <Htag tag={'h2'}>Ничего не найдено</Htag> : ''}
      </div>
      <div ref={buttonRef}>
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
      </div>
    </>
  );
};

export default Grid;

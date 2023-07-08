import React, { FC, useEffect, useState } from 'react';
import styles from './Grid.module.scss';
import { useTranslation } from 'react-i18next';
import Card from '@/UI/Card/Card';
import { Button } from '@/UI/Button/Button';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Loader from '@/UI/Loader/Loader';

interface iGrid {
  type: string;
}

const Grid: FC<iGrid> = ({ type }) => {
  const [page, setPage] = useState(1);
  const { data } = useFetchAllFilmsQuery({ type, page });
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
      setMovies((movies) => [...movies, ...data?.items]);
    }
  }, [data?.items]);

  return (
    <>
      <div className={styles.grid}>
        {movies?.length ? (
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
          <Loader />
        )}
      </div>
      {movies?.length
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

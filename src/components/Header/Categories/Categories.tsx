import React, { FC, useEffect } from 'react';
import styles from './Categories.module.scss';
import Link from 'next/link';
import { CategoriesProps } from './Categories.props';
import { useFetchFilmFiltersQuery } from '@/services/movie.api';
import { useAppDispatch } from '@/hooks/redux';
import { setCountries, setGenres } from '@/store/reducers/filters.slice';

const years = [];

for (let i = 2010; i < 2024; i++) {
  years.push(i);
}

const Categories: FC<CategoriesProps> = ({ collections }): JSX.Element => {
  const { data, error } = useFetchFilmFiltersQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data?.genres) {
      dispatch(setGenres(data.genres));
    }
    if (data?.countries) {
      dispatch(setCountries(data.countries));
    }
    if (error) {
      console.table(error);
    }
  }, [data]);
  return (
    <div className={styles.content}>
      <div className={styles.content__items}>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Жанры</h5>
          <div className={styles.content__genres}>
            {data?.genres &&
              data.genres.slice(0, 10).map((genre) => (
                <Link className={styles.content__link} key={genre.genre} href={'/'}>
                  {genre.genre}
                </Link>
              ))}
          </div>
        </div>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Страны</h5>
          <div className={styles.content__countries}>
            {data?.countries &&
              data.countries.slice(0, 10).map((country) => (
                <Link className={styles.content__link} key={country.country} href={'/'}>
                  {country.country}
                </Link>
              ))}
          </div>
        </div>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Годы</h5>
          <div className={styles.content__years}>
            {years.map((year) => (
              <Link className={styles.content__link} key={year} href={'/'}>
                {year}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.content__collections}>
        <div className={styles.collections__collection}>
          {collections &&
            collections.map((collection) => (
              <Link
                className={styles.collections__link}
                key={collection.title}
                href={collection.link}
              >
                {collection.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

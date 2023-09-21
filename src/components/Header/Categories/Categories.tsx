import Link from 'next/link';
import React, { FC, useEffect } from 'react';

import { useAppDispatch } from '@/hooks/redux';
import { useFetchFilmFiltersQuery } from '@/services';
import { setCountries, setGenres } from '@/store';
import { ILink } from '@/types/types';

import styles from './Categories.module.scss';

const years: number[] = [];

for (let i = 2010; i < 2024; i++) {
  years.push(i);
}

const collections: ILink[] = [
  { title: 'Новинки', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Подборки', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Иви.Рейтинг', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Трейлеры', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Что посмотреть', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Фильмы в HD', link: 'https://www.ivi.tv/movies/arthouse' },
  { title: 'Новинки подписки', link: 'https://www.ivi.tv/movies/arthouse' },
];

export const Categories: FC = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
            {data?.genres
              ? data.genres.slice(0, 10).map((genre) => (
                  <Link className={styles.content__link} key={genre.genre} href={'/'}>
                    {genre.genre}
                  </Link>
                ))
              : Array(15)
                  .fill(1)
                  .map((_, index) => (
                    <div
                      key={index}
                      style={{ width: '90%', height: '18px' }}
                      className={'loader'}
                    ></div>
                  ))}
          </div>
        </div>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Страны</h5>
          <div className={styles.content__countries}>
            {data?.countries
              ? data.countries.slice(0, 10).map((country) => (
                  <Link className={styles.content__link} key={country.country} href={'/'}>
                    {country.country}
                  </Link>
                ))
              : Array(15)
                  .fill(1)
                  .map((_, index) => (
                    <div
                      key={index}
                      style={{ width: '90%', height: '18px' }}
                      className={'loader'}
                    ></div>
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

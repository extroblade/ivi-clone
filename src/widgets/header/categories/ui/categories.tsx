import Link from 'next/link';
import { FC } from 'react';

import { defaultYearsRange } from '@/shared/constants/default-years-range';
import { useFetchFilmFiltersQuery } from '@/shared/services';
import { defaultCollections } from '@/widgets/header/categories/model/default-collections';
import { CategoriesProps } from '@/widgets/header/categories/model/props';

import styles from './categories.module.scss';

export const Categories: FC<CategoriesProps> = ({ href }): JSX.Element => {
  const { data: filters } = useFetchFilmFiltersQuery();
  return (
    <div className={styles.content}>
      <div className={styles.content__items}>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Жанры</h5>
          <div className={styles.content__genres}>
            {filters?.genres
              ? filters.genres.slice(0, 20).map(({ genre, id }) => (
                  <Link href={`${href}?genre=${id}`} className={styles.content__link} key={genre}>
                    {genre}
                  </Link>
                ))
              : Array(20)
                  .fill(1)
                  .map((_, index) => (
                    <div key={index} style={{ width: '90%' }} className={'loader'}></div>
                  ))}
          </div>
        </div>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Страны</h5>
          <div className={styles.content__countries}>
            {filters?.countries
              ? filters.countries.slice(0, 10).map(({ country, id }) => (
                  <Link
                    href={`${href}?country=${id}`}
                    className={styles.content__link}
                    key={country}
                  >
                    {country}
                  </Link>
                ))
              : Array(10)
                  .fill(1)
                  .map((_, index) => (
                    <div key={index} style={{ width: '90%' }} className={'loader'} />
                  ))}
          </div>
        </div>
        <div className={styles.content__item}>
          <h5 className={styles.content__title}>Годы</h5>
          <div className={styles.content__years}>
            {defaultYearsRange
              ?.sort((a, b) => b.year - a.year)
              .slice(0, 20)
              .map(({ year, id }) => (
                <Link href={`${href}?year=${id}`} className={styles.content__link} key={year}>
                  {year}
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.content__collections}>
        <div className={styles.collections__collection}>
          {defaultCollections?.map(({ link, title }) => (
            <Link className={styles.collections__link} key={title} href={link}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

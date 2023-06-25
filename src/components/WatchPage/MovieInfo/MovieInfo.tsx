import React, { FC } from 'react';
import styles from '@/components/WatchPage/WatchPage.module.scss';
import { Htag } from '@/components/Htag/Htag';
import i18next from 'i18next';
import { P } from '@/components/P/P';
import { PersonList } from '@/components/WatchPage/PersonList/PersonList';
import { IMovie, IMovieOld, IPersonOld, IPersonsInFilm } from '@/types/types';

interface iInfo {
  movie: IMovie | IMovieOld;
  persons: IPersonOld[] | IPersonsInFilm[];
}

const MovieInfo: FC<iInfo> = ({ movie, persons }) => {
  const {
    title,
    originalTitle,
    slogan,
    originalSlogan,
    description,
    enDescription,
    year,
    countries,
    rating,
    genres,
    duration,
    name,
    enName,
  } = movie;
  const filmName = title || name || null;
  const enFilmName = originalTitle || enName || null;
  const desc = slogan || description;
  const enDesc = originalSlogan || enDescription;

  const getCountries = () => {
    //creates a string with all countries divided by comma
    return countries.reduce((res, next, index) => {
      return index ? res + ', ' + next : res + next;
    }, '');
  };
  return (
    <div className={styles.watch__info}>
      <div className={styles.watch__title}>
        <Htag tag="h2">
          {i18next.language == 'en'
            ? `Movie ${enFilmName || filmName} watch online`
            : `Фильм ${filmName} смотреть онлайн`}
        </Htag>
      </div>
      <div className={styles.watch__params}>
        <ul className={styles.info_list}>
          <div className={styles.info_item}>{year}</div>
          <div className={styles.info_item}>
            {typeof duration !== 'string' ? `${duration.hours} часа` : duration}
          </div>
        </ul>
        <ul className={styles.info_list}>
          <div className={`${styles.info_item} ${styles.item_hasDot}`}>{getCountries()}</div>
          {genres?.length &&
            genres.map((genre, index) => (
              <div key={index} className={`${styles.info_item} ${styles.item_hasDot}`}>
                {genre}
              </div>
            ))}
        </ul>
      </div>
      <div className={styles.watch__rating}>
        <PersonList list={persons} rating={rating} />
      </div>
      <div className={styles.watch__description}>
        <P>{i18next.language == 'en' ? enDesc || desc : desc}</P>
      </div>
      <div className={styles.watch__medallions}></div>
    </div>
  );
};

export default MovieInfo;

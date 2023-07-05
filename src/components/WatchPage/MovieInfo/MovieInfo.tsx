import React, { FC } from 'react';
import styles from '@/components/WatchPage/WatchPage.module.scss';
import { PersonList } from '@/components/WatchPage/PersonList/PersonList';
import Link from 'next/link';
import Explanations from '@/components/WatchPage/Explanations/Explanations';
import RatingBlock from '@/components/WatchPage/RatingBlock/RatingBlock';
import MovieTitle from '@/components/WatchPage/MovieInfo/MovieTitle';
import MovieOptions from '@/components/WatchPage/MovieOptions/MovieOptions';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { countTime } from '@/helpers/countTime';

const MovieInfo: FC = () => {
  const { currentMovie } = useAppSelector(selectModal);
  if (!currentMovie?.year) return;
  const {
    year,
    countries,
    ratingKinopoisk,
    ratingKinopoiskVoteCount,
    genres,
    filmLength,
    nameEn,
    nameRu,
    persons,
    facts,
  } = currentMovie;

  return (
    <div className={styles.watch__info}>
      <div className={styles.watch__title}>
        <MovieTitle enFilmName={nameEn} filmName={nameRu} />
      </div>
      <div className={styles.watch__params}>
        <ul className={styles.info_list}>
          {year && <div className={styles.info_item}>{year}</div>}
          <div className={styles.info_item}>{countTime(filmLength)}</div>
        </ul>
        <ul className={styles.info_list}>
          {countries?.length &&
            countries.map((country, index) => (
              <div key={index} className={`${styles.info_item} ${styles.item_hasDot}`}>
                <Link href={'/movies'}>{country.country}</Link>
              </div>
            ))}
          {genres?.length &&
            genres.map((genre, index) => (
              <div key={index} className={`${styles.info_item} ${styles.item_hasDot}`}>
                <Link href={'/movies'}>{genre.genre}</Link>
              </div>
            ))}
        </ul>
      </div>
      <div className={styles.watch__rating}>
        <PersonList list={persons} rating={ratingKinopoisk} />
      </div>
      <Explanations array={facts?.items.slice(0, 5)} />
      <MovieOptions movie={currentMovie} />
      <div className={styles.watch__medallions}></div>
      <RatingBlock
        rating={ratingKinopoisk}
        rates={ratingKinopoiskVoteCount}
        criteria={'выдающиеся актеры'}
      />
    </div>
  );
};

export default MovieInfo;

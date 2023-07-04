import React, { FC } from 'react';
import styles from '@/components/WatchPage/WatchPage.module.scss';
import { PersonList } from '@/components/WatchPage/PersonList/PersonList';
import { IPersonOld, IPersonsInFilm } from '@/types/types';
import Link from 'next/link';
import Explanations from '@/components/WatchPage/Explanations/Explanations';
import RatingBlock from '@/components/WatchPage/RatingBlock/RatingBlock';
import MovieTitle from '@/components/WatchPage/MovieInfo/MovieTitle';
import MovieOptions from '@/components/WatchPage/MovieOptions/MovieOptions';
import { iFilm } from '@/types/kinopoiskTypes';

interface iInfo {
  movie: iFilm;
  persons?: IPersonOld[] | IPersonsInFilm[];
}

const MovieInfo: FC<iInfo> = ({ movie, persons }) => {
  const {
    year,
    countries,
    ratingKinopoisk,
    ratingKinopoiskVoteCount,
    genres,
    filmLength,
    nameEn,
    nameRu,
  } = movie;

  return (
    <div className={styles.watch__info}>
      <div className={styles.watch__title}>
        <MovieTitle enFilmName={nameEn} filmName={nameRu} />
      </div>
      <div className={styles.watch__params}>
        <ul className={styles.info_list}>
          <div className={styles.info_item}>{year}</div>
          <div className={styles.info_item}>{filmLength} минут</div>
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
      {/*<div className={styles.watch__rating}>*/}
      {/*  <PersonList list={persons} rating={rating} />*/}
      {/*</div>*/}
      <Explanations
        array={[
          'asasdasdasdasddasd  das ads asd a adsdas das dasdasdsadsa dddd adsd asd asda sd as dasasasdas das ad ds s das dasdas',
          'das sadasdas ass dasds das',
          'sa dasdasdsa d sdasasasasd',
        ]}
      />
      <MovieOptions movie={movie} />
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

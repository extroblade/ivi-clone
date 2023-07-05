import React from 'react';
import styles from '@/components/Modals/WatchPageModal/WatchPageModal.module.scss';
import Image from 'next/image';
import BarGraph from '@/components/BarGraph/BarGraph';
import { P } from '@/components/P/P';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { countTime } from '@/helpers/countTime';

const WatchModalInfoCard = () => {
  const { currentMovie } = useAppSelector(selectModal);
  console.log(currentMovie);
  const { posterUrl, ratingKinopoisk, year, countries, genres, duration, filmLength } =
    currentMovie;
  return (
    <div className={styles.movie}>
      <Image
        width={128}
        height={196}
        onClick={() => close()}
        className={styles.movie__img}
        src={posterUrl}
        alt=""
      />
      <div className={styles.movie__info}>
        <div className={styles.graphs}>
          <span>{ratingKinopoisk}</span>
          <div className={styles.graphs__wrap}>
            <BarGraph width={80} />
            <BarGraph width={73} />
            <BarGraph width={62} />
            <BarGraph width={98} />
          </div>
        </div>
        <P size="S" className={styles.movie__descr}>
          {year && `${year}, `}
          {countries?.length ? countries.map((country) => `${country.country}, `) : ''}
          {genres?.length ? genres.map((genre) => `${genre.genre}, `) : ''}
          {filmLength && countTime(filmLength)}
        </P>
        <P size="S">{duration}</P>
      </div>
    </div>
  );
};

export default WatchModalInfoCard;

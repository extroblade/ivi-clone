import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { BarGraph, Text } from '@/newui';
import { useFetchFilmQuery } from '@/shared/services';

import styles from './movie-modal-info.module.scss';

export const MovieModalInfo = () => {
  const router = useRouter();
  const { data: movie } = useFetchFilmQuery(Number(router.query?.id), { skip: !router?.query?.id });
  const { posterUrl, ratingKinopoisk, year, countries, genres, filmLength } = movie || {};
  if (!movie) return <></>;
  return (
    <div className={styles.movie}>
      {posterUrl && (
        <Image
          width={128}
          height={196}
          className={styles.movie__img}
          src={posterUrl}
          alt="poster"
        />
      )}
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
        <Text>
          {year && `${year}, `}
          {countries?.map(({ country }) => `${country}, `)}
          {genres?.map(({ genre }) => `${genre}, `)}
          {filmLength && dayjs.duration(filmLength, 'minutes').format('H часа mm минут')}
        </Text>
      </div>
    </div>
  );
};

import { FastAverageColor } from 'fast-average-color';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { useFetchFilmQuery } from '@/shared/services';

import styles from './color-container.module.scss';

export const ColorContainer: FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const router = useRouter();
  const { data: movie } = useFetchFilmQuery(Number(router.query?.id), { skip: !router.query?.id });
  useEffect(() => {
    if (!movie) {
      return;
    }
    const fac = new FastAverageColor();
    fac
      .getColorAsync(movie?.coverUrl || movie?.posterUrl || movie?.posterUrlPreview, {
        algorithm: 'simple',
        crossOrigin: 'a',
      })
      .then((color) => setBackgroundColor(color.rgb))
      .catch((e) => console.error(e));
  }, [movie]);
  if (!movie?.coverUrl) return <></>;
  return (
    <div
      className={styles.bg_container}
      style={{
        background: `linear-gradient(${backgroundColor} 0%, transparent 100%)`,
      }}
    />
  );
};

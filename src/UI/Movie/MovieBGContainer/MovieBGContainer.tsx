import { FastAverageColor } from 'fast-average-color';
import { FC, useEffect, useState } from 'react';

import { iFilm } from '@/shared/types/kinopoiskTypes';

import styles from './MovieBGContainer.module.scss';

export const MovieBGContainer: FC<{ movie: iFilm }> = ({ movie }) => {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    if (!movie?.coverUrl) {
      return;
    }
    const fac = new FastAverageColor();
    fac
      .getColorAsync(movie.coverUrl, { algorithm: 'simple' })
      .then((color) => setBgColor(color.hex));
  }, [movie]);
  if (!movie) return <></>;
  return (
    <div
      className={styles.bg_container}
      style={{
        background: `linear-gradient(${bgColor} 0%, transparent 100%)`,
      }}
    />
  );
};

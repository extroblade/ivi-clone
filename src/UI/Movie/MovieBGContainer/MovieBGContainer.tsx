import { FastAverageColor } from 'fast-average-color';
import React, { FC, useEffect, useState } from 'react';

import { useAppDispatch } from '@/hooks';
import { iFilm } from '@/types/kinopoiskTypes';

import styles from './MovieBGContainer.module.scss';

export const MovieBGContainer: FC<{ movie: iFilm }> = ({ movie }) => {
  const dispatch = useAppDispatch();
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    const fac = new FastAverageColor();
    if (movie?.coverUrl) {
      fac
        .getColorAsync(movie.coverUrl, {
          algorithm: 'simple',
        })
        .then((color) => {
          setBgColor(() => color.hex);
        });
    }
  }, [dispatch, movie]);
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

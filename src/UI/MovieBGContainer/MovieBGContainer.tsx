import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { FastAverageColor } from 'fast-average-color';
import styles from './MovieBGContainer.module.scss';

const MovieBGContainer = ({ movie }) => {
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
  if (!movie) return;
  return (
    <div
      className={styles.bg_container}
      style={{
        background: `linear-gradient(${bgColor} 0%, transparent 100%)`,
      }}
    />
  );
};

export default MovieBGContainer;

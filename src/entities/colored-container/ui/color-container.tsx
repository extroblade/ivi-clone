import { FastAverageColor } from 'fast-average-color';
import { FC, useEffect, useState } from 'react';

import { ColorContainerProps } from '../model/props';
import styles from './color-container.module.scss';

export const ColorContainer: FC<ColorContainerProps> = ({ movie }) => {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    if (!movie?.coverUrl) {
      return;
    }
    const fac = new FastAverageColor();
    fac
      .getColorAsync(movie?.coverUrl, {
        algorithm: 'simple',
        crossOrigin: 'a',
      })
      .then((color) => setBackgroundColor(color.hex));
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

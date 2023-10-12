import cn from 'classnames';
import { FC } from 'react';

import { RatingPlateProps } from '../model/props';
import styles from './rating-plate.module.scss';

export const RatingPlate: FC<RatingPlateProps> = ({ rating }) => {
  const currentRate = +String(rating).split('')[0];
  return (
    <div
      className={cn(
        styles.rating_plate,
        styles.good,
        currentRate >= 4 ? (currentRate >= 7 ? styles.good : styles.ok) : styles.bad
      )}
    >
      <div className={styles.plate_value}>{rating || 0}</div>
    </div>
  );
};

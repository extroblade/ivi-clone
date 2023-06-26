import React, { FC } from 'react';
import styles from '@/components/WatchPage/RatingBlock/RatingBlock.module.scss';

interface iPlate {
  rating: number | string;
}

const RatingPlate: FC<iPlate> = ({ rating }) => {
  let style;
  const currentRate = +String(rating).split('')[0];
  if (currentRate >= 7) {
    style = styles.good;
  } else if (currentRate >= 4) {
    style = styles.ok;
  } else {
    style = styles.bad;
  }
  return (
    <div className={`${styles.rating_plate} ${style}`}>
      <div className={styles.plate_value}>{rating}</div>
    </div>
  );
};

export default RatingPlate;

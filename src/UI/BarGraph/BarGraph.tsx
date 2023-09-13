import React, { FC } from 'react';

import styles from './BarGraph.module.scss';
import { BarGraphProps } from './BarGraph.props';

export const BarGraph: FC<BarGraphProps> = ({ width, color }): JSX.Element => {
  if (width > 100) {
    width = 100;
  } else if (width < 0) {
    width = 0;
  }
  return (
    <div className={styles.bar}>
      <div
        className={`${styles.barValue} ${!color ? (width >= 25 ? styles.red : styles.gray) : ''} ${
          color == 'gray' ? styles.gray : ''
        } ${color == 'red' ? styles.red : ''}`}
        style={{ width: `${width}%` }}
        data-testid={'bar'}
      />
    </div>
  );
};

import cn from 'classnames';
import React, { FC } from 'react';

import styles from './BarGraph.module.scss';
import { BarGraphProps } from './BarGraph.props';

export const BarGraph: FC<BarGraphProps> = ({ width, color, ...props }): JSX.Element => {
  if (width > 100) {
    width = 100;
  } else if (width < 0) {
    width = 0;
  }
  return (
    <div className={styles.bar} {...props}>
      <div
        className={cn(styles.barValue, color ? styles[color] : styles.red)}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

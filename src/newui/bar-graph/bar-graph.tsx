import cn from 'classnames';
import { FC } from 'react';

import styles from './bar-graph.module.scss';
import { BarGraphProps } from './bar-graph.props';

export const BarGraph: FC<BarGraphProps> = ({ width, color, ...props }) => {
  return (
    <div className={styles.bar} {...props}>
      <div
        className={cn(styles.bar_value, color ? styles[color] : styles.red)}
        style={{ width: `${Math.max(Math.min(width, 100), 0)}%` }}
      />
    </div>
  );
};

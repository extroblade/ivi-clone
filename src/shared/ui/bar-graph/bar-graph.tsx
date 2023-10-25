import cn from 'classnames';
import { HTMLProps } from 'react';

import styles from './bar-graph.module.scss';

export const BarGraph = ({
  width,
  rounded = true,
  color,
  ...props
}: {
  width: number;
  rounded?: boolean;
  color?: 'red' | 'gray';
} & HTMLProps<HTMLDivElement>) => {
  const fixedWidth = Math.max(Math.min(width, 100), 0);
  return (
    <div className={styles.bar} {...props}>
      <div
        className={cn(
          styles.bar_value,
          rounded && styles.rounded,
          color ? styles[color] : styles.red
        )}
        style={{ width: `${fixedWidth}%` }}
      />
    </div>
  );
};

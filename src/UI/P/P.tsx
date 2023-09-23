import cn from 'classnames';
import { FC } from 'react';

import styles from './P.module.scss';
import { PProps } from './P.props';

export const P: FC<PProps> = ({
  children,
  size = 'M',
  color,
  className,
  ...props
}): JSX.Element => {
  return (
    <p
      className={cn(
        styles.p,
        className,
        {
          [styles.S]: size == 'S',
          [styles.M]: size == 'M',
          [styles.L]: size == 'L',
        },
        {
          [styles.white]: color == 'white',
          [styles.gray__light]: color == 'gray-light',
          [styles.gray]: color == 'gray',
        }
      )}
      {...props}
    >
      {children}
    </p>
  );
};

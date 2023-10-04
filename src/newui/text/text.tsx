import cn from 'classnames';
import { FC } from 'react';

import styles from './text.module.scss';
import { TextProps } from './text.props';

export const Text: FC<TextProps> = ({
  children,
  size = 'M',
  color = 'gray',
  ...props
}): JSX.Element => {
  return (
    <p className={cn(styles.p, styles[size], styles[color])} {...props}>
      {children}
    </p>
  );
};

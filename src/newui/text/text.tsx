import cn from 'classnames';
import { FC } from 'react';

import { TextProps } from '@/newui/text/text.props';

import styles from './text.module.scss';

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

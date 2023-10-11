import cn from 'classnames';
import { FC } from 'react';

import styles from './button.module.scss';
import { ButtonProps } from './button.props';

export const Button: FC<ButtonProps> = ({
  children,
  appearance = 'rectangle',
  size = 'M',
  className,
  ...props
}): JSX.Element => {
  return (
    <button className={cn(styles.button, styles[appearance], styles[size], className)} {...props}>
      {children}
    </button>
  );
};

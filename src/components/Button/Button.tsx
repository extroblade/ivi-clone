import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({
  children,
  appearance = 'rectangle',
  size = 'M',
  className,
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        className,
        {
          [styles.rectangle]: appearance == 'rectangle',
          [styles.square]: appearance == 'square',
          [styles.circle]: appearance == 'circle',
          [styles.red]: appearance == 'red',
          [styles.transparent]: appearance == 'transparent',
          [styles.outline]: appearance == 'outline',
        },
        {
          [styles.S]: size == 'S',
          [styles.M]: size == 'M',
          [styles.L]: size == 'L',
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

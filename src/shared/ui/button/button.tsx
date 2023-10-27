import cn from 'classnames';

import styles from './button.module.scss';
import { ButtonProps } from './button.props';

export const Button = ({
  children,
  appearance = 'rectangle',
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        appearance && styles[appearance],
        size && styles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

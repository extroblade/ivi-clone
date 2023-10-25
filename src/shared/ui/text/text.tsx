import cn from 'classnames';

import styles from './text.module.scss';
import { TextProps } from './text.props';

export const Text = ({ children, size = 'M', color = 'gray', ...props }: TextProps) => {
  return (
    <p {...props} className={cn(styles.p, styles[size], styles[color], props.className)}>
      {children}
    </p>
  );
};

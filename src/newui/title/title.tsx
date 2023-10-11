import cn from 'classnames';

import styles from './title.module.scss';
import { TitleProps } from './title.props';

export const Title = ({ tag = 'h3', children, className, ...props }: TitleProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={cn(styles.h, styles.h1, className)} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={cn(styles.h, styles.h2, className)} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={cn(styles.h, styles.h3, className)} {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={cn(styles.h, styles.h4, className)} {...props}>
          {children}
        </h4>
      );
  }
};

import cn from 'classnames';

import styles from './Htag.module.scss';
import { HtagProps } from './Htag.props';

export const Htag = ({ tag, children, title, ...props }: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return (
        <h1 title={title} className={cn(styles.h, styles.h1)} {...props}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 title={title} className={cn(styles.h, styles.h2)} {...props}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 title={title} className={cn(styles.h, styles.h3)} {...props}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 title={title} className={cn(styles.h, styles.h4)} {...props}>
          {children}
        </h4>
      );
    default:
      return <></>;
  }
};

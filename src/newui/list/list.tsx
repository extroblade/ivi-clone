import { FC } from 'react';

import styles from './list.module.scss';
import { ListProps } from './list.props';

export const List: FC<ListProps> = ({ children }) => {
  return (
    <ol className={styles.list}>
      {children?.map((child, index) => (
        <li key={index} className={styles.li}>
          {child}
        </li>
      ))}
    </ol>
  );
};

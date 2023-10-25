import { ReactNode } from 'react';

import styles from './list.module.scss';

export const List = ({ children }: { children?: ReactNode[] }) => {
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

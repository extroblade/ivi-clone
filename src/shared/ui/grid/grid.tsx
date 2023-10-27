import { ReactNode } from 'react';

import styles from './grid.module.scss';

export const Grid = ({ children }: { children?: ReactNode[] }) => {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.grid__container}>
          <ul className={styles.grid__list}>
            {children?.map((child, index) => (
              <li className={styles.grid_item} key={index}>
                {child}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

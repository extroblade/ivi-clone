import { FC, ReactNode } from 'react';

import styles from './badge.module.scss';

export const Badge: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.badge}>
      <div className={styles.badge_text}>{children}</div>
    </div>
  );
};

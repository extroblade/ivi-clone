import { ReactNode } from 'react';

import styles from './badge.module.scss';

export const Badge = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <div className={styles.badge}>
      <div className={styles.badge_text}>{children}</div>
    </div>
  );
};

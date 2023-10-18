import { FC } from 'react';

import styles from './badge.module.scss';
import { BadgeProps } from './badge.props';

export const Badge: FC<BadgeProps> = ({ children }) => {
  return (
    <div className={styles.badge}>
      <div className={styles.badge_text}>{children}</div>
    </div>
  );
};

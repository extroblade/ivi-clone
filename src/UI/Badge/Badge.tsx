import React, { FC } from 'react';

import styles from './Badge.module.scss';

export const Badge: FC<{ text: string }> = ({ text }) => {
  return (
    <div className={styles.badge}>
      <div className={styles.badge_text}>{text}</div>
    </div>
  );
};

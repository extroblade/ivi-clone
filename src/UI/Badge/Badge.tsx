import React, { FC } from 'react';
import styles from './Badge.module.scss';

interface iBadge {
  text: string;
}

const Badge: FC<iBadge> = ({ text }) => {
  return (
    <div className={styles.badge}>
      <div className={styles.badge_text}>{text}</div>
    </div>
  );
};

export default Badge;

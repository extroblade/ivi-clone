import React, { FC } from 'react';

import styles from './PersonCard.module.scss';
import { PersonCardProps } from './PersonCard.props';

export const PersonCard: FC<PersonCardProps> = ({ children, title }) => {
  return (
    <div className={styles.person_card}>
      <div className={styles.wrapCard}>{children}</div>
      <div className={styles.card_name} title={title}>
        {title}
      </div>
    </div>
  );
};

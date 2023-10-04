import Link from 'next/link';
import { FC } from 'react';

import { PersonCardProps } from '../model/PersonCard.props';
import styles from './person-card.module.scss';

export const PersonCard: FC<PersonCardProps> = ({ children, link, title }) => {
  return (
    <Link href={link || ''} className={styles.person_card} title={title}>
      <div className={styles.wrapCard}>{children}</div>
      <div className={styles.card_name}>{title}</div>
    </Link>
  );
};

import Link from 'next/link';
import { ReactNode } from 'react';

import styles from './person-card.module.scss';

export const PersonCard = ({
  children,
  link,
  title,
}: {
  children: ReactNode | ReactNode[];
  title?: string;
  link?: string;
}) => {
  return (
    <Link href={link || ''} className={styles.person_card} title={title}>
      <div className={styles.wrapCard}>{children}</div>
      <div className={styles.card_name}>{title}</div>
    </Link>
  );
};

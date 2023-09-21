import Link from 'next/link';
import { FC } from 'react';

import styles from './FeatureTag.module.scss';

export const FeatureTag: FC<{ name: string; link: string }> = ({ name, link }): JSX.Element => {
  return (
    <Link href={link} className={styles.ft_cont}>
      <button className={styles.ft}>
        <span>{name}</span>
      </button>
    </Link>
  );
};

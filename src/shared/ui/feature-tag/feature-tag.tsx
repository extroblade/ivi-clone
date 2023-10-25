import Link from 'next/link';

import styles from './feature-tag.module.scss';

export const FeatureTag = ({ name, link }: { name: string; link: string }) => {
  return (
    <Link href={link} className={styles.ft_cont}>
      <button className={styles.ft}>
        <span>{name}</span>
      </button>
    </Link>
  );
};

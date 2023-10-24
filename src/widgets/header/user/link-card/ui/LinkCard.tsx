import Link from 'next/link';
import { IconType } from 'react-icons';

import styles from './LinkCard.module.scss';

export const LinkCard = ({
  icon,
  title,
  subtitle,
  link,
  status,
}: {
  icon: IconType;
  title: string;
  link: string;
  subtitle?: string;
  status?: 'red';
}) => {
  const IconComponent = icon;
  return (
    <Link href={link}>
      <div className={styles.card}>
        {status === 'red' && <span className={styles.card__status} />}
        <div className={styles.card__row}>
          <IconComponent className={styles.card__icon} />
          <div className={styles.card__text}>
            <h5>{title}</h5>
            {!!subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};

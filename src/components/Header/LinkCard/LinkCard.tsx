import Link from 'next/link';
import React, { FC } from 'react';

import styles from './LinkCard.module.scss';
import { LinkCardProps } from './LinkCard.props';

export const LinkCard: FC<LinkCardProps> = ({
  icon,
  title,
  subtitle,
  link,
  status,
}): JSX.Element => {
  const IconComponent = icon;
  return (
    <>
      <Link href={link}>
        <div className={styles.card}>
          {status === 'red' && <span className={styles.card__status}></span>}
          <div className={styles.card__row}>
            <IconComponent className={styles.card__icon} />
            <div className={styles.card__text}>
              <h5>{title}</h5>
              {!!subtitle && <p>{subtitle}</p>}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

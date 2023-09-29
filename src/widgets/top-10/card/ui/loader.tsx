import { FC } from 'react';

import { numbers } from '../model/numbers';
import { TopTenCardProps } from '../model/props';
import styles from './card.module.scss';

export const TopTenCardLoader: FC<Pick<TopTenCardProps, 'index'>> = ({ index }): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card_image} loader`} />
      <div className={styles.fade} />
      <div className={styles.fade_footer} />
      <div className={styles.place_number}>{numbers[index]}</div>
    </div>
  );
};

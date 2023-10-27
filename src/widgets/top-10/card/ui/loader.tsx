import { numbers } from '../model/numbers';
import styles from './card.module.scss';

export const TopTenCardLoader = ({ index }: { index: number }): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card_image} loader`} />
      <div className={styles.fade} />
      <div className={styles.fade_footer} />
      <div className={styles.place_number}>{numbers[index]}</div>
    </div>
  );
};

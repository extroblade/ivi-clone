import styles from './card.module.scss';

export const CardLoader = () => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.imageSection} loader`} />
      <div className={`${styles.textSection} loader`} />
    </div>
  );
};

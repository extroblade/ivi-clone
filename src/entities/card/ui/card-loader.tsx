import styles from './card.module.scss';

export const CardLoader = () => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.image_section} loader`} />
      <div className={`${styles.text_section} loader`} />
    </div>
  );
};

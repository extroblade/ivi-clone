import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.circle_loader} />
    </div>
  );
};

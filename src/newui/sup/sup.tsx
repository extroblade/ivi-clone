import styles from './sup.module.scss';
import { SupProps } from './sup.props';

export const Sup = ({ children }: SupProps) => {
  return <sup className={styles.sup}>{children}</sup>;
};

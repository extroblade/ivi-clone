import { ReactNode } from 'react';

import styles from './sup.module.scss';

export const Sup = ({ children }: { children: ReactNode }) => {
  return <sup className={styles.sup}>{children}</sup>;
};

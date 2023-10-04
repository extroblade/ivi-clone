import { FC } from 'react';

import styles from './sup.module.scss';
import { SupProps } from './sup.props';

export const Sup: FC<SupProps> = ({ children }) => {
  return <sup className={styles.sup}>{children}</sup>;
};

import { ReactNode } from 'react';

import styles from './dropdown.module.scss';

export const Dropdown = ({ state, children }: { state?: boolean; children: ReactNode }) => {
  if (!state) return <></>;
  return <div className={styles.dropdown_out}>{children}</div>;
};

import React, { FC, ReactNode } from 'react';

import styles from '@/entities/dropdown/ui/Dropdown.module.scss';

interface iDrop {
  state: boolean;
  children: ReactNode;
}

export const Dropdown: FC<iDrop> = ({ state, children }): JSX.Element => {
  return <>{state && <div className={styles.dropdown_out}>{children}</div>}</>;
};

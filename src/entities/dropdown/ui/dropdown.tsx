import { FC } from 'react';

import { DropdownProps } from '@/entities/dropdown/model/props';
import styles from '@/entities/dropdown/ui/dropdown.module.scss';

export const Dropdown: FC<DropdownProps> = ({ state, children }): JSX.Element => {
  if (!state) return <></>;
  return <div className={styles.dropdown_out}>{children}</div>;
};

import cn from 'classnames';
import { IoAddOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import styles from './sausage.module.scss';

export const Sausage = ({ title }: { title: string }) => {
  return (
    <div className={cn(styles.sausage, styles.checked)}>
      <div className={styles.icon_plus}>
        <IoAddOutline />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.icon_delete}>
        <RxCross2 />
      </div>
    </div>
  );
};

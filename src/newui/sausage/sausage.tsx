import cn from 'classnames';
import { FC } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import { SausageProps } from '@/newui/sausage/sausage.props';

import styles from './sausage.module.scss';

export const Sausage: FC<{ sausage: SausageProps }> = ({ sausage }): JSX.Element => {
  return (
    <div className={cn(styles.sausage, styles.checked)}>
      <div className={styles.icon_plus}>
        <IoAddOutline />
      </div>
      <div className={styles.title}>{sausage.title}</div>
      <div className={styles.icon_delete}>
        <RxCross2 />
      </div>
    </div>
  );
};

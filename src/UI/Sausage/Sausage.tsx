import i18next from 'i18next';
import { FC } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import { SausageProps } from '@/UI/Sausage/Sausage.props';

import styles from './Sausage.module.scss';

export const Sausage: FC<SausageProps> = ({ sausage }): JSX.Element => {
  return (
    <div className={`${styles.sausage} ${styles.checked}`}>
      <div className={styles.icon_plus}>
        <IoAddOutline />
      </div>
      <div className={styles.title}>
        {i18next.language == 'en' ? sausage.enTitle : sausage.title}
      </div>
      <div className={styles.icon_delete}>
        <RxCross2 />
      </div>
    </div>
  );
};

import i18next from 'i18next';
import { FC } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

import { sausages } from '@/mock';
import { SausageProps } from '@/UI/Sausage/Sausage.props';

import styles from './Sausage.module.scss';

export const Sausage: FC<SausageProps> = ({ sausage, chosen, set }): JSX.Element => {
  const check = () => {
    set(() =>
      [
        ...chosen.filter((i) => i.id !== sausage.id),
        chosen.find((item) => item.id === sausage.id)?.id ||
          sausages.find((item) => item.id === sausage.id),
      ].sort((a, b) => a.id - b.id)
    );
  };
  return (
    <div
      className={`${styles.sausage} ${
        chosen.find((item) => item.id == sausage.id)?.id && styles.checked
      }`}
      onClick={() => check()}
    >
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

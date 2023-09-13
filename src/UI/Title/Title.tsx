import React, { FC } from 'react';

import { Htag, Sup } from '@/UI';

import styles from './Title.module.scss';
interface iTitle {
  text: string;
  onClick?: () => void;
  sup?: number;
}

export const Title: FC<iTitle> = ({ text, onClick, sup }) => {
  return (
    <div onClick={onClick} className={styles.title}>
      <Htag title={text} tag={'h4'}>
        {text}
      </Htag>
      {sup !== undefined && <Sup text={sup || 0} />}
    </div>
  );
};

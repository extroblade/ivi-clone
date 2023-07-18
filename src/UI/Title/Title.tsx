import React, { FC } from 'react';
import styles from './Title.module.scss';
import { Htag } from '@/UI/Htag/Htag';
import Sup from '@/UI/Sup/Sup';
interface iTitle {
  text: string;
  onClick?: () => void;
  sup?: number;
}

const Title: FC<iTitle> = ({ text, onClick, sup }) => {
  return (
    <div onClick={onClick} className={styles.title}>
      <Htag title={text} tag={'h4'}>
        {text}
      </Htag>
      {sup !== undefined && <Sup text={sup || 0} />}
    </div>
  );
};

export default Title;

import React, { FC } from 'react';
import styles from './Sup.module.scss';

interface ISup {
  text: string | number;
}

const Sup: FC<ISup> = ({ text }) => {
  return <sup className={styles.sup}>{text}</sup>;
};

export default Sup;

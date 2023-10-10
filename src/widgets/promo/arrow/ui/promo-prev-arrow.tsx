import cn from 'classnames';
import { FC } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';

import { Button } from '@/newui';

import { ArrowProps } from '../model/props';
import styles from './arrows.module.scss';

export const PromoPrevArrow: FC<ArrowProps> = ({ onClick, className }) => {
  return (
    <div onClick={onClick} className={styles.arrow_container}>
      <div className={cn(styles.arrow, styles.prev_arrow)}>
        <Button
          size={'L'}
          appearance={'transparent'}
          disabled={className?.split(' ')[2] === 'slick-disabled'}
        >
          <MdArrowBackIosNew size={30} />
        </Button>
      </div>
      <div className={cn(styles.banner, styles.prev_banner)} />
    </div>
  );
};

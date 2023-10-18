import cn from 'classnames';
import { FC } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

import { Button } from '@/shared/ui';

import { ArrowProps } from '../model/props';
import styles from './arrows.module.scss';

export const PromoNextArrow: FC<ArrowProps> = ({ onClick, className }) => {
  return (
    <div onClick={onClick} className={styles.arrow_container}>
      <div className={cn(styles.arrow, styles.next_arrow)}>
        <Button
          size={'L'}
          appearance={'transparent'}
          disabled={className?.split(' ')[2] === 'slick-disabled'}
        >
          <MdArrowForwardIos size={30} />
        </Button>
      </div>
      <div className={cn(styles.banner, styles.next_banner)} />
    </div>
  );
};

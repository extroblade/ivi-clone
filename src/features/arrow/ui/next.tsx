import { FC } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

import { Button } from '@/newui';

import { ArrowProps } from '../model/props';
import styles from './styles.module.scss';

export const Next: FC<ArrowProps> = ({ variant, ...props }): JSX.Element => {
  const { onClick, className } = props;
  return (
    <div onClick={onClick} className={styles.arrow_container}>
      <div className={`${styles.arrow} ${variant === 'promo' ? styles.nextPromo : styles.next}`}>
        <Button
          size={'L'}
          appearance={'transparent'}
          disabled={className ? className.split(' ')[2] === 'slick-disabled' : false}
        >
          <MdArrowForwardIos size={30} />
        </Button>
      </div>
      {variant == 'promo' && <div className={styles.next_banner} />}
    </div>
  );
};
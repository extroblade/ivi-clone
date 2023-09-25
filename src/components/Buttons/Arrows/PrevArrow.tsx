import { FC } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';

import { Button } from '@/newui';

import { ArrowProps } from './Arrow.props';
import styles from './Arrows.module.scss';

export const PrevArrow: FC<ArrowProps> = ({ variant, ...props }): JSX.Element => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className={styles.arrow_container}>
      <div className={`${styles.arrow} ${variant === 'promo' ? styles.prevPromo : styles.prev}`}>
        <Button
          size={'L'}
          appearance={'transparent'}
          disabled={className ? className.split(' ')[2] === 'slick-disabled' : false}
        >
          <MdArrowBackIosNew size={30} />
        </Button>
      </div>
      {variant == 'promo' && <div className={styles.prev_banner} />}
    </div>
  );
};

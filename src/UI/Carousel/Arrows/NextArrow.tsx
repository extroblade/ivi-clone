import styles from './Arrows.module.scss';
import { Button } from '@/UI/Button/Button';
import { MdArrowForwardIos } from 'react-icons/md';
import React, { FC } from 'react';
import { ArrowProps } from '@/UI/Carousel/Arrows/Arrow.props';

const NextArrow: FC<ArrowProps> = ({ variant, ...props }): JSX.Element => {
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

export default NextArrow;

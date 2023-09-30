import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from 'next/link';
import { FC } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import Slider from 'react-slick';

import { Title } from '@/newui';

import { defaultSettings } from '../model/default-settings';
import { CarouselProps } from '../model/props';
import styles from './carousel.module.scss';

export const Carousel: FC<CarouselProps> = ({ title, children, route, settings }): JSX.Element => {
  return (
    <div className={styles.carousel}>
      {title && (
        <div className={styles.title}>
          <Link title={title} href={route || ''} className={styles.title_container}>
            <Title tag={'h4'}>{title}</Title>
            <MdArrowForwardIos />
          </Link>
        </div>
      )}
      <Slider {...(settings || defaultSettings)}>{children}</Slider>
    </div>
  );
};

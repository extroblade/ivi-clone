import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Link from 'next/link';
import { ReactNode } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import Slider, { Settings } from 'react-slick';

import { ShowAllCard } from '@/entities/card';
import { Title } from '@/shared/ui';

import { defaultSettings } from '../model/default-settings';
import styles from './carousel.module.scss';

export const Carousel = ({
  title,
  children,
  showAll,
  route,
  settings,
}: {
  title?: string;
  route?: string;
  settings?: Settings;
  children?: ReactNode | ReactNode[];
  showAll?: boolean;
}) => {
  const finalSettings = {
    ...defaultSettings,
    ...settings,
  };
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
      <Slider {...finalSettings}>
        {children}
        {showAll && <ShowAllCard link={route} />}
      </Slider>
    </div>
  );
};

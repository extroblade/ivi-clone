import { ReactNode } from 'react';

import { Carousel } from '@/entities/carousel';

import { PromoCard } from '../card';
import { carouselSettings } from '../model/carousel-settings';
import { mockCarousel } from '../model/mock-slides';
import styles from './promo.module.scss';

export const Promo = ({ actions }: { actions?: ReactNode }) => {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel settings={carouselSettings}>
          {mockCarousel.map((slide) => (
            <PromoCard {...slide} key={slide.id} />
          ))}
        </Carousel>
      </div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </>
  );
};

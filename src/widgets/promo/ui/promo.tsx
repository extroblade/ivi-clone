import { FC } from 'react';

import { Carousel } from '@/entities/carousel';
import {
  ActivateCertificateButton,
  PromotionButton,
} from '@/features/profile-interactions/buttons';

import { PromoCard } from '../card';
import { carouselSettings } from '../model/carousel-settings';
import { mockCarousel } from '../model/mockSlides';
import styles from './promo.module.scss';

export const Promo: FC = () => {
  return (
    <>
      <div className={styles.carousel}>
        <Carousel settings={carouselSettings}>
          {mockCarousel.map((slide) => (
            <PromoCard slide={slide} key={slide.id} />
          ))}
        </Carousel>
      </div>
      <div className={styles.promo_buttons}>
        <PromotionButton type={'rect_icon_purple'} />
        <ActivateCertificateButton type={'rect_icon'} />
      </div>
    </>
  );
};

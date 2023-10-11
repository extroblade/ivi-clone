import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FC } from 'react';
import Slider from 'react-slick';

import {
  ActivateCertificateButton,
  PromotionButton,
} from '@/features/profile-interactions/buttons';
import { PromoCard } from '@/widgets/promo/card';
import { mockCarousel } from '@/widgets/promo/model/mockSlides';
import { carouselSettings } from '@/widgets/promo/model/props';

import styles from './promo.module.scss';

export const Promo: FC = () => {
  return (
    <>
      <div className={styles.carousel}>
        <Slider {...carouselSettings}>
          {mockCarousel.map((slide) => (
            <PromoCard slide={slide} key={slide.id} />
          ))}
        </Slider>
      </div>
      <div className={styles.promo_buttons}>
        <PromotionButton type={'rect_icon_purple'} />
        <ActivateCertificateButton type={'rect_icon'} />
      </div>
    </>
  );
};

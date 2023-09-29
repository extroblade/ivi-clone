import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import {
  ActivateCertificateButton,
  PromotionButton,
} from '@/features/profile-interactions/buttons';
import { PromoCarouselSlide } from '@/widgets/promo/card/ui/card';
import { carouselSettings, PromoCarouselProps } from '@/widgets/promo/model/props';

import styles from './PromoCarousel.module.scss';

export const PromoCarousel: FC = () => {
  const { t } = useTranslation();
  const mockCarousel: PromoCarouselProps[] = [
    {
      id: 1,
      name: 'Шпион',
      description:
        'Сотрудник ФСБ с тёмным прошлым защищает свою страну. Детектив с Сергеем Безруковым',
      enDescription:
        'An FSS officer with a shady past defends his country. Detective with Sergei Bezrukov',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/b/6/356258bbe7c5ba5b5b40251be3d48f.png/x200/',
      card_image:
        'https://thumbs.dfs.ivi.ru/storage4/contents/0/8/e43d2485f22868f57b2dcf5193d2ad.jpg/1216x524/?q=85',
      btn: t('buttons.watch-sub'),
    },
    {
      id: 2,
      name: 'Здоровый человек',
      description:
        'Звезда «Тетриса» и «Нулевого пациента» Никита Ефремов бросает престижную работу ради великой цели',
      enDescription:
        'Nikita Efremov, star of "Tetris" and "Patient Zero," gives up a prestigious job for a great cause',
      logo: 'https://thumbs.dfs.ivi.ru/storage30/contents/a/a/c55629c1cb82b0ac7c0d9aca539d89.png/x200/',
      card_image:
        'https://thumbs.dfs.ivi.ru/storage15/contents/b/d/03674ff6e27da1cd69f1f0e9337249.jpg/1216x524/?q=85',
      btn: t('buttons.watch-free'),
    },
    {
      id: 3,
      name: 'Семья',
      description:
        'История любви девушки-психолога и главы мафии. Горячая турецкая новинка с Кыванчем Татлытугом',
      enDescription:
        'A love story between a girl psychologist and a mafia boss. Hot Turkish novel with Kivanc Tatlitug',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/d/e/14ad136916cb3797041ef18a0b6149.png/x200/',
      card_image:
        'https://thumbs.dfs.ivi.ru/storage6/contents/a/d/9c7a06852d0d87d206bdcc1c54899e.jpg/1216x524/?q=85',
      btn: t('buttons.watch-collection'),
    },
    {
      id: 4,
      name: 'Изумительный Морис',
      description:
        'Обаятельный кот и умные крысы проворачивают хитрые аферы. По книге Терри Пратчетта',
      enDescription:
        'A charming cat and clever rats pull some clever scams. Based on a book by Terry Pratchett',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/d/a/e175075e82d7ec21518b793875d4b7.png/x200/',
      card_image:
        'https://thumbs.dfs.ivi.ru/storage28/contents/4/2/3b902683579802bb9161649c3edbdf.jpg/1216x524/?q=85',
      btn: t('buttons.watch'),
    },
    {
      id: 5,
      name: 'Война миров: Вторжение',
      description:
        'Трое студентов оказываются в центре сражения земных войск и смертоносных боевых машин марсиан',
      enDescription:
        'Three students find themselves in the middle of a battle between Earth troops and deadly Martian war machines',
      logo: 'https://thumbs.dfs.ivi.ru/storage4/contents/7/f/856da932e9a08d6dd0fbb80fa73ddd.png/x200/',
      card_image:
        'https://thumbs.dfs.ivi.ru/storage9/contents/1/e/4f4ce4b4ce28c5a287bd461172f714.jpg/1216x524/?q=85',
      btn: t('buttons.watch-sub'),
    },
    {
      id: 6,
      name: 'Совсем не большие города',
      description: 'Лучшие сериалы про провинцию',
      enDescription: 'Best series about the province',
      logo: null,
      card_image:
        'https://thumbs.dfs.ivi.ru/storage8/contents/3/6/67f58162d55e13452d1dde96870d88.jpg/1216x524/?q=85',
      btn: t('buttons.watch-sub'),
    },
  ];

  return (
    <>
      <div className={styles.carousel}>
        <Slider {...carouselSettings}>
          {mockCarousel.map((slide) => (
            <PromoCarouselSlide slide={slide} key={slide.id} />
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

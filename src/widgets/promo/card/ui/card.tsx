import { FastAverageColor } from 'fast-average-color';
import i18next from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Text, Title } from '@/newui';
import { PromoCardProps } from '@/widgets/promo/card/model/props';
import styles from '@/widgets/promo/ui/PromoCarousel.module.scss';

export const PromoCarouselSlide: FC<PromoCardProps> = ({ slide }): JSX.Element => {
  const [color, setColor] = useState<boolean>(true);
  const { t } = useTranslation();
  useEffect(() => {
    const fac = new FastAverageColor();
    fac
      .getColorAsync(slide.card_image, {
        algorithm: 'simple',
      })
      .then((color) => {
        setColor(() => color.isDark);
      })
      .catch((e) => console.error(e));
  }, [slide.card_image]);
  return (
    <Link href={'/movies'} className={styles.item}>
      <div className={styles.img}>
        <Image src={slide.card_image} priority alt={'watch more'} width={1216} height={524} />
        <div className={styles.information}>
          <div className={styles.content_container}>
            <div className={styles.logo} style={{ color: `${color ? 'white' : 'black'}` }}>
              {slide.logo ? (
                <Image
                  src={slide.logo}
                  alt="logo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <Title>{slide.name}</Title>
              )}
            </div>
            <Text className={styles.synopsis} style={{ color: `${color ? 'white' : 'black'}` }}>
              {i18next.language == 'ru' ? slide.description : slide.enDescription}
            </Text>
          </div>
          <Button appearance={'red'} title={t(slide.btn) || ''}>
            {t(slide.btn)}
          </Button>
        </div>
      </div>
    </Link>
  );
};

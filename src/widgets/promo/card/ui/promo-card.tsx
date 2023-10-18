import { FastAverageColor } from 'fast-average-color';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Text, Title } from '@/shared/ui';

import { PromoCardProps } from '../model/props';
import styles from './promo-card.module.scss';

export const PromoCard: FC<PromoCardProps> = ({
  slide: { card_image, logo, name, description, enDescription, btn },
}): JSX.Element => {
  const [isColorDark, setIsColorDark] = useState(true);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const fac = new FastAverageColor();
    fac
      .getColorAsync(card_image, {
        algorithm: 'simple',
      })
      .then((color) => {
        setIsColorDark(() => color.isDark);
      })
      .catch((e) => console.error(e));
  }, [card_image]);
  return (
    <Link href={'/movies'} className={styles.card}>
      <div className={styles.img_container}>
        <Image
          src={card_image}
          className={styles.img}
          priority
          alt={'watch more'}
          width={1216}
          height={524}
        />
        <div className={styles.information}>
          <div className={styles.content_container}>
            <div className={styles.logo} style={{ color: `${isColorDark ? 'white' : 'black'}` }}>
              {logo ? (
                <Image
                  className={styles.logo_img}
                  src={logo}
                  alt="logo"
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <Title>{name}</Title>
              )}
            </div>
            <Text
              className={styles.synopsis}
              style={{ color: `${isColorDark ? 'white' : 'black'}` }}
            >
              {i18n.language == 'ru' ? description : enDescription}
            </Text>
          </div>
          <Button appearance={'red'}>{t(btn)}</Button>
        </div>
      </div>
    </Link>
  );
};

import cn from 'classnames';
import { FastAverageColor } from 'fast-average-color';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Text, Title } from '@/shared/ui';

import styles from './promo-card.module.scss';

export const PromoCard = ({
  card_image,
  logo,
  name,
  description,
  enDescription,
  btn,
}: {
  id: number;
  name: string;
  description: string;
  enDescription: string;
  logo: string | null;
  card_image: string;
  btn: string;
}) => {
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
      <div className={cn(styles.img_container, 'loader')}>
        <Image
          src={card_image}
          className={styles.img}
          priority
          alt={'watch more'}
          width={1216}
          height={524}
        />
        <div className={styles.information}>
          <div
            className={styles.content_container}
            style={{ color: `${isColorDark ? 'white' : 'black'}` }}
          >
            <div className={styles.logo}>
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
            <Text className={styles.synopsis}>
              {i18n.language == 'ru' ? description : enDescription}
            </Text>
          </div>
          <Button size={'M'} appearance={'red'}>
            {t(btn)}
          </Button>
        </div>
      </div>
    </Link>
  );
};

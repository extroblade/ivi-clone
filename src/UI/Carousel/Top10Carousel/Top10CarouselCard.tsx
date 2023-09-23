import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { iFilm } from '@/shared/types/kinopoiskTypes';
import styles from '@/UI/Carousel/Top10Carousel/Top10Carousel.module.scss';
interface iCard {
  card: iFilm;
  index: number;
}
interface iLoader {
  index: number;
}

const top = [
  <Image width={32} height={44} alt={`top1`} src={'/images/top10/number1.svg'} key={1} />,
  <Image width={32} height={44} alt={`top2`} src={'/images/top10/number2.svg'} key={2} />,
  <Image width={32} height={44} alt={`top3`} src={'/images/top10/number3.svg'} key={3} />,
  <Image width={32} height={44} alt={`top4`} src={'/images/top10/number4.svg'} key={4} />,
  <Image width={32} height={44} alt={`top5`} src={'/images/top10/number5.svg'} key={5} />,
  <Image width={32} height={44} alt={`top6`} src={'/images/top10/number6.svg'} key={6} />,
  <Image width={32} height={44} alt={`top7`} src={'/images/top10/number7.svg'} key={7} />,
  <Image width={32} height={44} alt={`top8`} src={'/images/top10/number8.svg'} key={8} />,
  <Image width={32} height={44} alt={`top9`} src={'/images/top10/number9.svg'} key={9} />,
  <>
    <Image width={32} height={44} alt={`top1`} src={'/images/top10/number1.svg'} />
    <Image width={32} height={44} alt={`0`} src={'/images/top10/number0.svg'} />
  </>,
];
const T10CardLoader: FC<iLoader> = ({ index }): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card_image} loader`} />
      <div className={styles.fade} />
      <div className={styles.fade_footer} />
      <div className={styles.place_number}>{top[index]}</div>
    </div>
  );
};

export const T10Card: FC<iCard> = ({ card, index }): JSX.Element => {
  if (!card?.filmId) return <T10CardLoader index={index} />;
  const { filmId, posterUrlPreview, posterUrl, nameEn, nameRu } = card;
  return (
    <Link href={`/watch/${filmId}`} className={styles.card}>
      <div className={styles.card_image}>
        <Image
          src={posterUrlPreview || posterUrl}
          alt={nameRu || nameEn}
          width={234}
          height={360}
        />
      </div>
      <div className={styles.fade} />
      <div className={styles.fade_footer} />
      <div className={styles.logo}>
        <div className={styles.logo_title}>{nameRu || nameEn || ''}</div>
      </div>
      <div className={styles.place_number}>{top[index]}</div>
    </Link>
  );
};

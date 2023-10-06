import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { useLocalizeName } from '@/shared/helpers';

import { numbers } from '../model/numbers';
import { TopTenCardProps } from '../model/props';
import styles from './card.module.scss';
import { TopTenCardLoader } from './loader';

export const TopTenCard: FC<TopTenCardProps> = ({ card, index }): JSX.Element => {
  const movieName = useLocalizeName(card);

  if (!card?.filmId) return <TopTenCardLoader index={index} />;
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
        <div className={styles.logo_title}>{movieName}</div>
      </div>
      <div className={styles.place_number}>{numbers[index]}</div>
    </Link>
  );
};

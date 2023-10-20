import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { CardProps } from '@/entities/card';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { Text } from '@/shared/ui';

import styles from './card.module.scss';
import { CardLoader } from './card-loader';

export const Card: FC<CardProps> = ({ card, buttons, info }): JSX.Element => {
  const { kinopoiskId: id, filmId, posterUrlPreview } = card || {};
  const movieName = useLocalizeName(card);
  if (!posterUrlPreview) return <CardLoader />;
  return (
    <Link
      href={`/watch/${id || filmId}`}
      className={cn(styles.card, (info || buttons) !== undefined && styles.hover)}
      draggable="false"
    >
      <div className={styles.image_section}>
        <Image
          className={styles.image}
          src={posterUrlPreview}
          alt={movieName || 'poster'}
          width={234}
          height={360}
          quality={85}
        />
        <div className={styles.props}>
          <div className={styles.buttons}>{buttons}</div>
          <div className={styles.info}>{info}</div>
        </div>
      </div>
      <Text className={styles.text_section} size={'S'}>
        {movieName}
      </Text>
    </Link>
  );
};

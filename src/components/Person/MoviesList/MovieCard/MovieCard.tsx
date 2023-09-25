import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { professionTypes } from '@/constants';
import { CardLoader } from '@/entities/card';
import { Button, Text } from '@/newui';

import styles from './MovieCard.module.scss';
import { MovieCardProps } from './MovieCard.props';

export const MovieCard: FC<MovieCardProps> = ({ card }) => {
  const { t, i18n } = useTranslation();
  if (!card) return <CardLoader />;
  const { filmId, description, year, nameRu, nameEn, rating, professionKey: type } = card;
  const name = i18n.language == 'en' ? nameEn || nameRu : nameRu || nameEn;
  return (
    <Link href={`/watch/${filmId}`} className={styles.card} title={name}>
      <div className={styles.info}>
        <div>
          <Text color={'white'}>{year}</Text>
          <Text color={'white'}>{name}</Text>
          <div className={styles.info_row}>
            {description && <Text size={'S'}>{description}, </Text>}

            {type && (
              <Text size={'S'}>
                {i18n.language == 'en'
                  ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    professionTypes[type]?.enName
                  : // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    professionTypes[type]?.ruName}
                ,
              </Text>
            )}

            {rating && (
              <Text size={'S'}>
                {t('categories.rating')}: {rating}
              </Text>
            )}
          </div>
        </div>
      </div>
      <Button>{t('buttons.read-more')}</Button>
    </Link>
  );
};

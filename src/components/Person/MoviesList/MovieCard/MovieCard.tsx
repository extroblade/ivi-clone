import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { professionTypes } from '@/constants';
import { Button, CardLoader, P } from '@/UI';

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
          <P color={'white'}>{year}</P>
          <P color={'white'}>{name}</P>
          <div className={styles.info_row}>
            {description && <P size={'S'}>{description}, </P>}
            {type && (
              <P size={'S'}>
                {i18n.language == 'en'
                  ? professionTypes[type]?.enName
                  : professionTypes[type]?.ruName}
                ,
              </P>
            )}

            {rating && (
              <P size={'S'}>
                {t('categories.rating')}: {rating}
              </P>
            )}
          </div>
        </div>
      </div>
      <Button>{t('buttons.read-more')}</Button>
    </Link>
  );
};

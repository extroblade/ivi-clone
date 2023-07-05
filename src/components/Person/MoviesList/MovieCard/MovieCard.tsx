import React, { FC } from 'react';
import styles from './MovieCard.module.scss';
import { MovieCardProps } from './MovieCard.props';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';
import { useTranslation } from 'react-i18next';
import CardLoader from '@/components/Card/CardLoader';
import { professionTypes } from '@/constants/Professions';

const MovieCard: FC<MovieCardProps> = ({ card }) => {
  const { t, i18n } = useTranslation();
  if (!card) return <CardLoader />;

  const { filmId, description, year, nameRu, nameEn, rating, professionKey: type } = card;
  return (
    <Link href={`/watch/${filmId}`} className={styles.card}>
      <div className={styles.info}>
        <div>
          <P color={'white'}>{year}</P>
          <P color={'white'}>{i18n.language == 'en' ? nameEn || nameRu : nameRu || nameEn}</P>
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

export default MovieCard;

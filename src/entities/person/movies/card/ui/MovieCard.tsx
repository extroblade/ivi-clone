import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { languageVariants, professionTypes } from '@/constants';
import { Button, Text } from '@/newui';
import { localizeName } from '@/shared/helpers/localize-name';

import { MovieCardProps } from '../model/MovieCard.props';
import styles from './MovieCard.module.scss';

export const MovieCard: FC<MovieCardProps> = ({ card }) => {
  const { t, i18n } = useTranslation();
  const { filmId, description, rating, professionKey } = card;
  return (
    <Link href={`/watch/${filmId}`} className={styles.card} title={localizeName(card)}>
      <div className={styles.info}>
        <div>
          <Text color={'white'}>{localizeName(card)}</Text>
          <div className={styles.info_row}>
            {description && <Text size={'S'}>{description}, </Text>}

            {professionKey && (
              <Text size={'S'}>
                {professionTypes[professionKey][i18n.language as languageVariants]},
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

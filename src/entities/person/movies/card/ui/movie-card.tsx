import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getProfessionByType } from 'src/shared/constants';

import { Button, Text } from '@/newui';
import { localizeName } from '@/shared/helpers/localize-name';

import { MovieCardProps } from '../model/props';
import styles from './movie-card.module.scss';

export const MovieCard: FC<MovieCardProps> = ({ card }) => {
  const { t } = useTranslation();
  const { filmId, description, rating, professionKey } = card;
  return (
    <Link href={`/watch/${filmId}`} className={styles.card} title={localizeName(card)}>
      <div className={styles.info}>
        <div>
          <Text color={'white'}>{localizeName(card)}</Text>
          <div className={styles.info_row}>
            {description && <Text size={'S'}>{description}, </Text>}

            <Text size={'S'}>{getProfessionByType(professionKey)},</Text>

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

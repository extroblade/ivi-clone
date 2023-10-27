import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { getProfessionByType } from '@/shared/constants';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { StaffFilm } from '@/shared/types/kinopoiskTypes';
import { Button, Text } from '@/shared/ui';

import styles from './movie-card.module.scss';

export const MovieCard = ({ card }: { card: StaffFilm }) => {
  const { t } = useTranslation();
  const { filmId, description, rating, professionKey } = card;
  const movieName = useLocalizeName(card);
  return (
    <Link href={`/watch/${filmId}`} className={styles.card} title={movieName}>
      <div className={styles.info}>
        <div>
          <Text color={'white'}>{movieName}</Text>
          <div className={styles.info_row}>
            {description && <Text size={'S'}>{description}, </Text>}

            {professionKey && <Text size={'S'}>{getProfessionByType(professionKey)},</Text>}

            {rating && (
              <Text size={'S'}>
                {t('categories.rating')}: {rating}
              </Text>
            )}
          </div>
        </div>
      </div>
      <Button size={'M'}>{t('buttons.read-more')}</Button>
    </Link>
  );
};

import { useTranslation } from 'react-i18next';

import { RatingPlate } from '@/features/rating-block/rating-plate';
import { getRate } from '@/shared/helpers';
import { useAppDispatch } from '@/shared/hooks';
import { setShowRating } from '@/shared/store';
import { Button } from '@/shared/ui';

import styles from './rating-block.module.scss';

export const RatingBlock = ({
  rating,
  criteria,
  rates,
}: {
  rating: number;
  criteria: string;
  rates: number;
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const openRating = () => {
    dispatch(setShowRating(true));
  };

  if (!rating) return <></>;

  return (
    <div className={styles.rating_block}>
      <div className={styles.rating_container} onClick={openRating}>
        <RatingPlate rating={rating} />
        <div className={styles.text_block}>
          <div className={styles.title}>{t('categories.rating')}</div>
          <div className={styles.subtitle}>{criteria}</div>
          <div className={styles.extra}>
            {rates} {getRate(rates)}
          </div>
        </div>
        <Button appearance={'outline'}>{t('buttons.rate')}</Button>
      </div>
    </div>
  );
};

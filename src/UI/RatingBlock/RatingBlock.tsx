import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/newui';
import { getRate } from '@/shared/helpers';
import { useAppDispatch } from '@/shared/hooks';
import { setShowRating } from '@/shared/store';
import { RatingPlate } from '@/UI';
import { RatingBlockProps } from '@/UI/RatingBlock/RatingBlockProps';

import styles from './RatingBlock.module.scss';

export const RatingBlock: FC<RatingBlockProps> = ({ rating, criteria, rates }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const openRating = () => {
    dispatch(setShowRating(true));
  };

  return (
    <div className={styles.rating_block} onClick={openRating}>
      <div className={styles.rating_container}>
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

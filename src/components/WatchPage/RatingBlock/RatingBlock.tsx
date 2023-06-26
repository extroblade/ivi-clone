import React, { FC } from 'react';
import styles from './RatingBlock.module.scss';
import { Button } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';
import { RatingBlockProps } from '@/components/WatchPage/RatingBlock/RatingBlockProps';
import { useAppDispatch } from '@/hooks/redux';
import { setShowRating } from '@/store/reducers/modals.slice';
import { getRate } from '@/helpers/remainingAmount';

const RatingBlock: FC<RatingBlockProps> = ({ rating, criteria, rates }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const openRating = () => {
    dispatch(setShowRating(true));
  };
  let style;
  const currentRate = +rating[0];
  if (currentRate > 7) {
    style = styles.good;
  } else if (currentRate > 4) {
    style = styles.ok;
  } else {
    style = styles.bad;
  }
  return (
    <div className={styles.rating_block} onClick={openRating}>
      <div className={styles.rating_container}>
        <div className={`${styles.rating_plate} ${style}`}>
          <div className={styles.plate_value}>{rating}</div>
        </div>
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

export default RatingBlock;

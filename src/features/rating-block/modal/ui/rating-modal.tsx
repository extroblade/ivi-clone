import cn from 'classnames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Modal, Text, Title } from '@/newui';
import { useAppDispatch, useAppSelector, usePreventScroll } from '@/shared/hooks';
import { selectModal, setShowRating } from '@/shared/store';

import { rates } from '../model/props';
import styles from './rating-modal.module.scss';

export const RatingModal: FC = (): JSX.Element => {
  const [active, setActive] = useState<number | null>();
  const { t } = useTranslation();
  const { showRating } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setShowRating(false));
    setActive(null);
  };
  const handleRate = (rating: number) => {
    setActive(() => rating);
  };
  usePreventScroll(showRating);
  return (
    <Modal isOpen={showRating} closeModal={handleClose}>
      <div className={styles.body}>
        <Title tag={'h2'}>{t('descriptions.your-rate')}</Title>
        <Text>{t('descriptions.rates-improvements')}</Text>
        <div className={styles.picker}>
          {rates.map((rating) => (
            <Button
              key={rating}
              appearance={'transparent'}
              onClick={() => handleRate(rating)}
              className={cn(rating === active && styles.active)}
            >
              {rating}
            </Button>
          ))}
        </div>
        <div className={styles.helper}>
          <Text>{t('buttons.very-bad')}</Text>
          <Text>{t('buttons.great')}</Text>
        </div>
        <Button appearance={'red'} disabled={!active} onClick={handleClose}>
          {t('buttons.rate')}
        </Button>
      </div>
    </Modal>
  );
};

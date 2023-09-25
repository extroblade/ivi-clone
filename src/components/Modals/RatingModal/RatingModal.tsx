import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Text } from '@/newui';
import { useAppDispatch, useAppSelector, usePreventScroll } from '@/shared/hooks';
import { selectModal, setShowRating } from '@/shared/store';
import { FullScreenModal, Htag } from '@/UI';

import styles from './RatingModal.module.scss';

const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const RatingModal: FC = (): JSX.Element => {
  const [active, setActive] = useState<number | null>();
  const { t } = useTranslation();
  const { showRating } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowRating(false));
    setActive(null);
  };
  const rate = (rating: number) => {
    setActive(() => rating);
  };
  usePreventScroll(showRating);
  return (
    <FullScreenModal isOpen={showRating} closeModal={close}>
      <div className={styles.body}>
        <Htag tag={'h2'}>{t('descriptions.your-rate')}</Htag>
        <Text>{t('descriptions.rates-improvements')}</Text>
        <div className={styles.picker}>
          {rates.map((rating) => (
            <Button
              key={rating}
              appearance={'transparent'}
              onClick={() => rate(rating)}
              className={rating === active ? styles.active : ''}
            >
              {rating}
            </Button>
          ))}
        </div>
        <div className={styles.helper}>
          <div>
            <Text>{t('buttons.very-bad')}</Text>
          </div>
          <div>
            <Text>{t('buttons.great')}</Text>
          </div>
        </div>
        <Button appearance={'red'} disabled={!active} onClick={close}>
          {t('buttons.rate')}
        </Button>
      </div>
    </FullScreenModal>
  );
};

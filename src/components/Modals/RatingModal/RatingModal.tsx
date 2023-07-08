import { FC, useState } from 'react';
import FullScreenModal from '@/UI/FullScreenModal/FullScreenModal';
import styles from './RatingModal.module.scss';
import { Htag } from '@/UI/Htag/Htag';
import { P } from '@/UI/P/P';
import { Button } from '@/UI/Button/Button';
import { useTranslation } from 'react-i18next';
import { selectModal, setShowRating } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { usePreventScroll } from '@/hooks/usePreventScroll';
const rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const RatingModal: FC = (): JSX.Element => {
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
        <P>{t('descriptions.rates-improvements')}</P>
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
            <P>{t('buttons.very-bad')}</P>
          </div>
          <div>
            <P>{t('buttons.great')}</P>
          </div>
        </div>
        <Button appearance={'red'} disabled={!active} onClick={close}>
          {t('buttons.rate')}
        </Button>
      </div>
    </FullScreenModal>
  );
};

export default RatingModal;

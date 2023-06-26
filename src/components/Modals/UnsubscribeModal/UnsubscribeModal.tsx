import React from 'react';
import styles from './UnsubscribeModal.module.scss';
import FullScreenModal from '@/components/Modals/FullScreenModal/FullScreenModal';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import { selectModal, setShowUnsub } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { P } from '@/components/P/P';
import { Button } from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const UnsubscribeModal = () => {
  const { t, i18n } = useTranslation();
  const { showUnsub, personModalItem } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const close = () => {
    dispatch(setShowUnsub(false));
  };
  const unsubscribe = () => {
    close();
  };
  usePreventScroll(showUnsub);
  return (
    <FullScreenModal isOpen={showUnsub} closeModal={close}>
      <section className={styles.modal_body}>
        <div className={styles.modal_inner}>
          <div className={styles.title}>{t('sections.unsub-notifications')}</div>
          <div className={styles.content}>
            <article className={styles.desc}>
              <P className={styles.info} color={'gray'}>
                {t('sections.stop-notifications')}
              </P>
              <Button onClick={unsubscribe} appearance={'red'}>
                {t('buttons.unsubscribe')}
              </Button>
            </article>
            <article className={styles.poster}>
              <Image width={100} height={160} src={personModalItem?.card_image} alt={'poster'} />
              <span className={styles.text}>
                {i18n.language == 'en' ? personModalItem?.enName : personModalItem?.name}
              </span>
            </article>
          </div>
        </div>
      </section>
    </FullScreenModal>
  );
};

export default UnsubscribeModal;

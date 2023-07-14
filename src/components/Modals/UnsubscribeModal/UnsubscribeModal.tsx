import React from 'react';
import styles from './UnsubscribeModal.module.scss';
import FullScreenModal from '@/UI/FullScreenModal/FullScreenModal';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import { selectModal, setActiveAlerts, setShowUnsub } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { P } from '@/UI/P/P';
import { Button } from '@/UI/Button/Button';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { createNewAlert } from '@/helpers/createNewAlert';

const UnsubscribeModal = () => {
  const { t, i18n } = useTranslation();
  const { showUnsub, currentMovie } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const { activeAlerts } = useAppSelector(selectModal);
  const close = () => {
    dispatch(setShowUnsub(false));
  };
  const unsubscribe = () => {
    const newAlertList = createNewAlert(
      '',
      'Вы больше не будете получать уведомления о выходе новых серий',
      activeAlerts
    );
    dispatch(setActiveAlerts(newAlertList));
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
              <Image width={100} height={160} src={currentMovie?.posterUrl} alt={'poster'} />
              <span className={styles.text}>
                {i18n.language == 'en' ? currentMovie?.nameEn : currentMovie?.nameRu}
              </span>
            </article>
          </div>
        </div>
      </section>
    </FullScreenModal>
  );
};

export default UnsubscribeModal;

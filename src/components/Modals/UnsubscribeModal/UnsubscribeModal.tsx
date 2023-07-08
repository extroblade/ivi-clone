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

const UnsubscribeModal = () => {
  const { t, i18n } = useTranslation();
  const { showUnsub, currentMovie } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const { activeAlerts } = useAppSelector(selectModal);
  const close = () => {
    dispatch(setShowUnsub(false));
  };
  const unsubscribe = () => {
    const cur = [];
    const newAlert = {
      id: self.crypto.randomUUID(),
      title: 'Комментарий не отправлен',
      extra: 'Вы больше не будете получать уведомления о выходе новых серий',
    };
    if (activeAlerts?.length && !activeAlerts?.find((alert) => alert.id == newAlert.id)) {
      cur.push(...activeAlerts, newAlert);
    } else {
      cur.push(newAlert);
    }
    dispatch(setActiveAlerts(cur));
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

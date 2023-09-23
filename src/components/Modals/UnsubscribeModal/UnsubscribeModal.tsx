import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { createNewAlert } from '@/helpers';
import { useAppDispatch, useAppSelector, usePreventScroll } from '@/hooks';
import { selectModal, setActiveAlerts, setShowUnsub } from '@/shared/store';
import { Button, FullScreenModal, P } from '@/UI';

import styles from './UnsubscribeModal.module.scss';

export const UnsubscribeModal = () => {
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
              {currentMovie?.posterUrl && (
                <Image width={100} height={160} src={currentMovie.posterUrl} alt={'poster'} />
              )}
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

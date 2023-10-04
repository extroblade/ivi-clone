import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Button, Modal, Text } from '@/newui';
import { localizeName } from '@/shared/helpers';
import { useAppDispatch, useAppSelector, useCreateAlert } from '@/shared/hooks';
import { selectModal, setShowUnsub } from '@/shared/store';

import styles from './UnsubscribeModal.module.scss';

export const UnsubscribeModal = () => {
  const { t } = useTranslation();
  const { showUnsub, currentMovie } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setShowUnsub(false));
  };
  const createAlert = useCreateAlert();
  const handleUnsubscribe = () => {
    createAlert({ extra: 'Вы больше не будете получать уведомления о выходе новых серий' });
    handleClose();
  };
  if (!currentMovie) return <></>;
  return (
    <Modal isOpen={showUnsub} closeModal={handleClose}>
      <section className={styles.modal_body}>
        <div className={styles.modal_inner}>
          <div className={styles.title}>{t('sections.unsub-notifications')}</div>
          <div className={styles.content}>
            <article className={styles.desc}>
              <Text className={styles.info} color={'gray'}>
                {t('sections.stop-notifications')}
              </Text>
              <Button onClick={handleUnsubscribe} appearance={'red'}>
                {t('buttons.unsubscribe')}
              </Button>
            </article>
            <article className={styles.poster}>
              {currentMovie?.posterUrl && (
                <Image width={100} height={160} src={currentMovie.posterUrl} alt={'poster'} />
              )}
              <Text>{localizeName(currentMovie)}</Text>
            </article>
          </div>
        </div>
      </section>
    </Modal>
  );
};

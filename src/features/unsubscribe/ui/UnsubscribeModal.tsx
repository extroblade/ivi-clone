import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { useLocalizeName } from '@/shared/helpers';
import { useAppDispatch, useAppSelector, useCreateAlert } from '@/shared/hooks';
import { useFetchFilmQuery } from '@/shared/services';
import { selectModal, setShowUnsub } from '@/shared/store';
import { Button, Modal, Text } from '@/shared/ui';

import styles from './UnsubscribeModal.module.scss';

export const UnsubscribeModal = () => {
  const { t } = useTranslation();
  const { showUnsub } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data: movie } = useFetchFilmQuery(Number(router.query?.id), { skip: !router?.query?.id });
  const handleClose = () => {
    dispatch(setShowUnsub(false));
  };
  const createAlert = useCreateAlert();
  const handleUnsubscribe = () => {
    createAlert({ extra: 'Вы больше не будете получать уведомления о выходе новых серий' });
    handleClose();
  };
  const movieName = useLocalizeName(movie);
  if (!movie) return <></>;
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
              {movie?.posterUrl && (
                <Image width={100} height={160} src={movie.posterUrl} alt={'poster'} />
              )}
              <Text>{movieName}</Text>
            </article>
          </div>
        </div>
      </section>
    </Modal>
  );
};

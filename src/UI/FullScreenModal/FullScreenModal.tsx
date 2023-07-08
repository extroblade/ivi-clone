import React, { FC } from 'react';
import styles from './FullScreenModal.module.scss';
import { FSMProps } from '@/UI/FullScreenModal/FullScreenModal.prop';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useTranslation } from 'react-i18next';
import { usePreventScroll } from '@/hooks/usePreventScroll';

const FullScreenModal: FC<FSMProps> = ({ isOpen, closeModal, children }) => {
  useEscapeKey(closeModal);
  usePreventScroll(isOpen);

  const { t } = useTranslation();
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <span
            className={styles.cross}
            onClick={() => closeModal()}
            title={t('buttons.close-form') || 'Нажмите, чтобы закрыть форму'}
          />
          {children}
        </div>
      )}
    </>
  );
};

export default FullScreenModal;

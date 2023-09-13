import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useEscapeKey, usePreventScroll } from '@/hooks';
import { FSMProps } from '@/UI/FullScreenModal/FullScreenModal.prop';

import styles from './FullScreenModal.module.scss';
export const FullScreenModal: FC<FSMProps> = ({ isOpen, closeModal, children }) => {
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

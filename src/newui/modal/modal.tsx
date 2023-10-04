import cn from 'classnames';
import { motion } from 'framer-motion';
import React, { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/newui';
import { ModalProps } from '@/newui/modal/modal.props';
import { useBooleanState, useEscapeKey, useOutsideClick, usePreventScroll } from '@/shared/hooks';

import styles from './modal.module.scss';

const variants = {
  hidden: {
    transition: { duration: 0.3 },
    opacity: 0,
    margin: 0,
  },
};
export const Modal: FC<ModalProps> = ({ isOpen, closeModal, variant = 'fullscreen', children }) => {
  const { t } = useTranslation();

  const [isClosing, { handleClose: handleClosing, handleOpen }] = useBooleanState();
  const modalRef = useRef(null);
  const handleClose = () => {
    handleOpen();

    setTimeout(() => {
      handleClosing();
      closeModal();
    }, 100);
  };

  usePreventScroll(isOpen);
  useEscapeKey(handleClose);
  useOutsideClick(handleClose, modalRef);
  if (!isOpen) return <></>;
  return (
    <motion.div
      ref={modalRef}
      variants={variants}
      animate={!isClosing ? 'visible' : 'hidden'}
      className={cn(styles.modal, styles[variant])}
      initial={!isClosing ? 'visible' : 'hidden'}
    >
      <Button
        appearance={'transparent'}
        className={styles.cross}
        onClick={handleClose}
        title={t('buttons.close-form') || 'Нажмите, чтобы закрыть форму'}
      />
      {children}
    </motion.div>
  );
};

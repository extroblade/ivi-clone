import cn from 'classnames';
import { motion } from 'framer-motion';
import React, { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/newui';
import { ModalProps } from '@/newui/modal/modal.props';
import { useEscapeKey, useOutsideClick, usePreventScroll } from '@/shared/hooks';

import styles from './modal.module.scss';

const variants = {
  hidden: {
    transition: { duration: 0.3 },
    opacity: 0,
    margin: 0,
  },
};
export const Modal: FC<ModalProps> = ({ isOpen, closeModal, variant = 'fullscreen', children }) => {
  usePreventScroll(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);
  const handleClose = () => {
    setIsClosing(() => true);

    setTimeout(() => {
      setIsClosing(() => false);
      closeModal();
    }, 100);
  };
  useEscapeKey(handleClose);
  useOutsideClick(handleClose, modalRef);
  const { t } = useTranslation();
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

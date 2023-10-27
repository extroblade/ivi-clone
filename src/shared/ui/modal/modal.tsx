import cn from 'classnames';
import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useBooleanState, useEscapeKey, useOutsideClick, usePreventScroll } from '@/shared/hooks';
import { Button } from '@/shared/ui';

import styles from './modal.module.scss';

const variants = {
  hidden: {
    transition: { duration: 0.3 },
    opacity: 0,
    margin: 0,
  },
};
export const Modal = ({
  isOpen,
  cross = true,
  closeModal,
  variant = 'fullscreen',
  children,
}: {
  variant?: 'fullscreen' | 'primary';
  children?: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  cross?: boolean;
}) => {
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
      {cross && (
        <Button
          appearance={'transparent'}
          className={styles.cross}
          onClick={handleClose}
          title={t('buttons.close-form') || 'Нажмите, чтобы закрыть форму'}
        />
      )}
      {children}
    </motion.div>
  );
};

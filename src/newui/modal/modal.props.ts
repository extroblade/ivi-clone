import { ReactNode } from 'react';

export interface ModalProps {
  variant?: 'fullscreen' | 'primary';
  children?: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
  cross?: boolean;
}

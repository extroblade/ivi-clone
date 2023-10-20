import { ReactNode } from 'react';

export type PlankProps = {
  children: ReactNode[] | ReactNode;
  dropdown?: ReactNode;
  isActive?: boolean;
  onClose: () => void;
  onToggle: () => void;
  title: string;
};

import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type ModalListProps = {
  children?: ReactNode | ReactNode[];
  title: ReactNode | ReactNode[];
  icon?: IconType;
  isFilms?: boolean;
};

export type ListProps = {
  title: string;
  link: string;
};
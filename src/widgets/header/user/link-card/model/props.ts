import { IconType } from 'react-icons';

export type LinkCardProps = {
  icon: IconType;
  title: string;
  link: string;
  subtitle?: string;
  status?: 'red';
};

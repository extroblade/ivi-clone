import { iPerson, iStaff } from '@/types/kinopoiskTypes';

export interface PersonCardProps {
  person?: iStaff | iPerson;
  rating?: number | string;
}

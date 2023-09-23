import { iPerson, iStaff } from '@/shared/types/kinopoiskTypes';

export interface PersonCardProps {
  person?: iStaff | iPerson;
  rating?: number | string;
}

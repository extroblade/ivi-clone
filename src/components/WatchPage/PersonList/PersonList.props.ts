import { IPersonOld, IPersonsInFilm } from '@/types/types';

export interface PersonListProps {
  list: IPersonOld[] | IPersonsInFilm[];
  rating: string;
}

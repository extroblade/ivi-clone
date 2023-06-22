import { IMovie, IMovieOld } from '@/types/types';

export interface CardProps {
  card: IMovie & IMovieOld;
  hover?: boolean;
  star?: boolean;
  book?: boolean;
  find?: boolean;
  block?: boolean;
}

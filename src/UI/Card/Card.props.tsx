import { iFilm, iSimilarItems } from '@/shared/types/kinopoiskTypes';

export interface CardProps {
  card: iFilm | iSimilarItems | any;
  hover?: boolean;
  star?: boolean;
  book?: boolean;
  find?: boolean;
  block?: boolean;
  info?: boolean;
}

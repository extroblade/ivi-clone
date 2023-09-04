import { iFilm, iSimilarItems } from '@/types/kinopoiskTypes';

export interface CardProps {
  card: iFilm | iSimilarItems | any;
  hover?: boolean;
  star?: boolean;
  book?: boolean;
  find?: boolean;
  block?: boolean;
  info?: boolean;
}

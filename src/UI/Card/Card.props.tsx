import { iFilm, iSimilarItems } from '@/types/kinopoiskTypes';

export interface CardProps {
  card: iFilm | iSimilarItems;
  hover?: boolean;
  star?: boolean;
  book?: boolean;
  find?: boolean;
  block?: boolean;
  infO?: boolean;
}

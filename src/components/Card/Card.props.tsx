import { iFilm } from '@/types/kinopoiskTypes';

export interface CardProps {
  card: iFilm;
  hover?: boolean;
  star?: boolean;
  book?: boolean;
  find?: boolean;
  block?: boolean;
  infO?: boolean;
}

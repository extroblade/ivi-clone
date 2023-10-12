import { ReactNode } from 'react';

import { iFilm, iSimilarItems } from '@/shared/types/kinopoiskTypes';

export type CardProps = {
  card: Partial<iFilm> & Partial<iSimilarItems>;
  buttons?: ReactNode;
  info?: ReactNode;
};

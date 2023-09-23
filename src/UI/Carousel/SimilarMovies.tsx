import i18next from 'i18next';
import React, { FC } from 'react';

import { useAppSelector } from '@/hooks';
import { selectModal } from '@/shared/store';
import { iSimilar } from '@/shared/types/kinopoiskTypes';
import { Carousel } from '@/UI';
interface iSimilarCarousel {
  similar?: iSimilar;
}
export const SimilarMovies: FC<iSimilarCarousel> = ({ similar }) => {
  const { currentMovie } = useAppSelector(selectModal);
  const enName = currentMovie?.nameEn || currentMovie?.nameOriginal || currentMovie?.nameRu || '';
  const ruName = currentMovie?.nameRu || currentMovie?.nameOriginal || currentMovie?.nameEn || '';
  const title =
    i18next.language == 'en' ? `Movies similar to «${enName}»` : `С фильмом «${ruName}» смотрят`;

  if (!similar?.total) return <></>;
  return <Carousel hover={false} title={title} movies={similar?.items} route={'/'} />;
};

import i18next from 'i18next';
import React, { FC } from 'react';

import { iSimilar } from '@/shared/types/kinopoiskTypes';
import { Carousel } from '@/UI';

interface iSimilarCarousel {
  similar?: iSimilar;
}

export const SimilarMovies: FC<iSimilarCarousel> = ({ similar }) => {
  const title = i18next.language == 'en' ? `Similar movies:` : `Также смотрят:`;

  if (!similar?.total) return <></>;
  return <Carousel hover={false} title={title} movies={similar?.items} route={'/'} />;
};

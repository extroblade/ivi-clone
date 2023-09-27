import i18next from 'i18next';
import React, { FC } from 'react';

import { Title } from '@/newui/title/title';
import { iFilm } from '@/shared/types/kinopoiskTypes';

interface iTitle {
  movie: iFilm;
}

export const MovieTitle: FC<iTitle> = ({ movie }) => {
  const { nameRu, nameEn, nameOriginal } = movie || {};
  const name =
    i18next.language === 'en' ? nameEn || nameOriginal || nameRu : nameRu || nameOriginal || nameEn;
  if (!movie) return <></>;
  return (
    <Title tag="h2">
      {i18next.language == 'en' ? `Movie ${name} watch online` : `Фильм ${name} смотреть онлайн`}
    </Title>
  );
};

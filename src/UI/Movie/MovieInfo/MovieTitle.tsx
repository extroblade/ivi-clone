import i18next from 'i18next';
import React, { FC } from 'react';

import { Title } from '@/newui/title/title';

interface iTitle {
  filmName: string;
  enFilmName: string;
}

export const MovieTitle: FC<iTitle> = ({ filmName = 'фильм', enFilmName = 'movie' }) => {
  return (
    <Title tag="h2">
      {i18next.language == 'en'
        ? `Movie ${enFilmName || filmName} watch online`
        : `Фильм ${filmName} смотреть онлайн`}
    </Title>
  );
};

import React, { FC } from 'react';
import i18next from 'i18next';
import { Htag } from '@/components/Htag/Htag';
interface iTitle {
  filmName: string;
  enFilmName: string;
}

const MovieTitle: FC<iTitle> = ({ filmName = 'фильм', enFilmName = 'movie' }) => {
  return (
    <Htag tag="h2">
      {i18next.language == 'en'
        ? `Movie ${enFilmName || filmName} watch online`
        : `Фильм ${filmName} смотреть онлайн`}
    </Htag>
  );
};

export default MovieTitle;

import i18next from 'i18next';

import { ICurrentMovie } from '@/shared/store';
import { iFilm, iPerson, StaffFilm } from '@/shared/types/kinopoiskTypes';

type localizeNameProps = iFilm | iPerson | StaffFilm | ICurrentMovie;
export const localizeName = (object: localizeNameProps) => {
  return i18next.language === 'en'
    ? object?.nameEn ||
        ('nameOriginal' in object && object?.nameOriginal) ||
        object?.nameRu ||
        'Не указано'
    : object?.nameRu ||
        ('nameOriginal' in object && object?.nameOriginal) ||
        object?.nameEn ||
        'Not found';
};

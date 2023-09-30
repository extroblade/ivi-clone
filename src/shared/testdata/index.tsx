import { configureStore } from '@reduxjs/toolkit';

import { alertsReducer, filtersReducer, modalsReducer } from '@/shared/store';

export const mockStore = configureStore({
  reducer: { modalsReducer, filtersReducer, alertsReducer },
});

export const mockCard: any = {
  kinopoiskId: 1,
  nameRu: 'Гарри Поттер и Дары Смерти: Часть I',
  nameEn: 'Harry Potter and the Deathly Hallows: Part I',
  description:
    'Заключительный фильм «поттерианы» о волшебном мире Дж.К. Роулинг и верных друзьях Гарри Поттере, Роне Уизли и Гермионе Грейнджер. Продолжается магическая война.',
  posterUrlPreview:
    'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg/234x360/?q=85',
  year: 2011,
  countries: [{ country: 'США', id: 1 }],
  ratingKinopoisk: 9.5,
  genres: [{ genre: 'Фэнтези', id: 1 }],
  persons: [],
};

export const emptyCard: any = {
  id: 1,
  name: '',
  enName: '',
  description: '',
  enDescription: '',
  trailer: '',
  posterUrlPreview:
    'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg/234x360/?q=85',
  year: '',
  countries: '',
  rating: '',
  genres: [''],
  duration: '',
  persons: [],
};

import { configureStore } from '@reduxjs/toolkit';

import alertsReducer from '@/entities/alert-list/model/slice';
import filtersReducer from '@/shared/store/reducers/filters.slice';
import modalsReducer from '@/shared/store/reducers/modals.slice';

export const mockStore = configureStore({
  reducer: { modalsReducer, filtersReducer, alertsReducer },
});

export const mockCard = {
  id: 1,
  name: 'Гарри Поттер и Дары Смерти: Часть I',
  enName: 'Harry Potter and the Deathly Hallows: Part I',
  description:
    'Заключительный фильм «поттерианы» о волшебном мире Дж.К. Роулинг и верных друзьях Гарри Поттере, Роне Уизли и Гермионе Грейнджер. Продолжается магическая война.',
  enDescription:
    'The final "Potter" film about the magical world of J.K. Rowling and faithful friends Harry Potter, Ron Weasley, and Hermione Granger. The magical war continues.',
  trailer: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  posterUrlPreview:
    'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg/234x360/?q=85',
  year: '2011',
  countries: 'США',
  rating: '9,5',
  genres: ['Фэнтези'],
  duration: '2ч 50мин',
  persons: [],
};

export const emptyCard = {
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

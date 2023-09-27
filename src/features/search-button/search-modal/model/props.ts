export type RedirectProps = {
  type: 'watch' | 'person' | 'movies';
  id?: string | number;
};

export const presets = [
  'Премьеры фильмов',
  'Новинки подписки',
  'Сериалы Amediateka',
  'Высокий рейтинг',
];

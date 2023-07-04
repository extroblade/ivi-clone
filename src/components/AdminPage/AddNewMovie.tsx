import React from 'react';
import { Button } from '@/components/Button/Button';
import { IMovieOld } from '@/types/types';
const movie: IMovieOld = {
  id: 1,
  name: 'Гарри Поттер и Дары Смерти: Часть I',
  enName: 'Harry Potter and the Deathly Hallows: Part I',
  slogan:
    'Заключительный фильм «поттерианы» о волшебном мире Дж.К. Роулинг и верных друзьях Гарри Поттере, Роне Уизли и Гермионе Грейнджер. Продолжается магическая война.',
  originalSlogan:
    'The final "Potter" film about the magical world of J.K. Rowling and faithful friends Harry Potter, Ron Weasley, and Hermione Granger. The magical war continues.',
  trailer: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  card_image:
    'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg/234x360/?q=85',
  year: '2011',
  countries: ['США'],
  rating: '9,5',
  genres: ['Фэнтези'],
  duration: '2ч 50мин',
  persons: [1, 2, 3],
};

const AddNewMovie = () => {
  const create = () => {
    console.log('mock creation');
  };
  return (
    <div>
      <Button onClick={create}>add</Button>
      <div> doesnt work until finish backend part </div>
    </div>
  );
};

export default AddNewMovie;

import { Meta } from '@storybook/react';
import React from 'react';

import { Card } from '@/entities/card';
import { Carousel } from '@/entities/carousel';

const cards: any = [
  {
    id: 1,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Harry Potter and the Deathly Hallows: Part I',
    description: '',
    enDescription: '',
    trailer: '',
    posterUrlPreview:
      'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
    year: '2011',
    countries: 'США',
    rating: '9,5',
    genres: ['Фэнтези'],
    duration: '2ч 50мин',
    persons: [],
  },
  {
    id: 2,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Harry Potter and the Deathly Hallows: Part I',
    description: '',
    enDescription: '',
    trailer: '',
    posterUrlPreview:
      'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
    year: '2011',
    countries: 'США',
    rating: '9,5',
    genres: ['Фэнтези'],
    duration: '2ч 50мин',
    persons: [],
  },
  {
    id: 3,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Harry Potter and the Deathly Hallows: Part I',
    description: '',
    enDescription: '',
    trailer: '',
    posterUrlPreview:
      'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
    year: '2011',
    countries: 'США',
    rating: '9,5',
    genres: ['Фэнтези'],
    duration: '2ч 50мин',
    persons: [],
  },
  {
    id: 4,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Harry Potter and the Deathly Hallows: Part I',
    description: '',
    enDescription: '',
    trailer: '',
    posterUrlPreview:
      'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
    year: '2011',
    countries: 'США',
    rating: '9,5',
    genres: ['Фэнтези'],
    duration: '2ч 50мин',
    persons: [],
  },
  {
    id: 5,
    name: 'Гарри Поттер и Дары Смерти: Часть I',
    enName: 'Harry Potter and the Deathly Hallows: Part I',
    description: '',
    enDescription: '',
    trailer: '',
    posterUrlPreview:
      'https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg',
    year: '2011',
    countries: 'США',
    rating: '9,5',
    genres: ['Фэнтези'],
    duration: '2ч 50мин',
    persons: [],
  },
];

const CarouselWM = (args: any) => (
  <Carousel {...args}>
    {cards.map((card: any) => (
      <Card key={card.id} card={card} />
    ))}
  </Carousel>
);

const meta: Meta<typeof Carousel> = {
  title: 'Main/Carousel',
  component: CarouselWM,
};

export default meta;

export const CarouselStory = {
  component: CarouselWM,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    title: 'title',
    route: '/',
    showAll: true,
  },
};

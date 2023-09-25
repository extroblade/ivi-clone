import { Meta } from '@storybook/react';

import { RatingModal } from '@/components';
import { CardProps } from '@/entities/card/model/Card.props';
import { Card } from '@/UI';

const card = {
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
};

const CardWM = (args: JSX.IntrinsicAttributes & CardProps): JSX.Element => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Card {...args} card={card} />
    <RatingModal />
  </div>
);

const meta: Meta<typeof Card> = {
  title: 'Main/Card',
  component: CardWM,
};

export default meta;

export const Hover = {
  title: 'Main/Card',
  component: CardWM,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    card: card,
    hover: true,
    star: true,
    book: true,
    find: true,
    block: true,
  },
};

export const NoHover = {
  args: {
    card: card,
    hover: false,
  },
};

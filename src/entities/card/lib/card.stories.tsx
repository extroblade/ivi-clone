import { Meta } from '@storybook/react';

import { Card } from '@/entities/card';
import { Props } from '@/entities/card/model/props';
import { RatingModal } from '@/features/rating-block';
import { mockCard } from '@/shared/testdata';

const card = mockCard;

const CardWM = (args: JSX.IntrinsicAttributes & Props): JSX.Element => (
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

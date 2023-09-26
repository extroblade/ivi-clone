import type { Meta, StoryObj } from '@storybook/react';

import { ShowAllCard } from '@/entities/card';

const meta: Meta<typeof ShowAllCard> = {
  title: 'Main/Card',
  component: ShowAllCard,
};

export default meta;
type Story = StoryObj<typeof ShowAllCard>;

export const ShowAll: Story = {
  args: {},
};

import type { Meta, StoryObj } from '@storybook/react';

import { ShowAll } from '@/UI';

const meta: Meta<typeof ShowAll> = {
  title: 'Main/Card',
  component: ShowAll,
};

export default meta;
type Story = StoryObj<typeof ShowAll>;

export const ShowAllCard: Story = {
  args: {},
};

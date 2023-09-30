import { Meta, StoryObj } from '@storybook/react';

import { ShowAll } from '@/entities/card/lib/show-all-card.stories';
import { SelectProfile } from '@/features/select-profile';

const meta: Meta<typeof SelectProfile> = {
  title: 'Main/Profile',
  component: SelectProfile,
};

export default meta;

type Story = StoryObj<typeof ShowAll>;

export const Selector: Story = {
  args: {},
};

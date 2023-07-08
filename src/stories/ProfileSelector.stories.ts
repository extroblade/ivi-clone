import { Meta, StoryObj } from '@storybook/react';
import ProfileSelector from '@/UI/ProfileSelector/ProfileSelector';
import ShowAll from '@/UI/Card/ShowAll';

const meta: Meta<typeof ProfileSelector> = {
  title: 'Main/Profile',
  component: ProfileSelector,
};

export default meta;

type Story = StoryObj<typeof ShowAll>;

export const Selector: Story = {
  args: {},
};

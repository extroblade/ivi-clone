import type { Meta, StoryObj } from '@storybook/react';

import { Title } from '@/newui/title/title';
import { TitleProps } from '@/newui/title/title.props';

const meta: Meta<TitleProps> = {
  title: 'Main/Htag',
  component: Title,
};

export default meta;
type Story = StoryObj<TitleProps>;

export const H1: Story = {
  args: {
    tag: 'h1',
    children: 'text',
  },
};

export const H2: Story = {
  args: {
    tag: 'h2',
    children: 'text',
  },
};

export const H3: Story = {
  args: {
    tag: 'h3',
    children: 'text',
  },
};

export const H4: Story = {
  args: {
    tag: 'h4',
    children: 'text',
  },
};

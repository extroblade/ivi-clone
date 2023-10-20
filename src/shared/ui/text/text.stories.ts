import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/shared/ui/text/text';
import { TextProps } from '@/shared/ui/text/text.props';

const meta: Meta<TextProps> = {
  title: 'Main/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<TextProps>;

export const White: Story = {
  args: {
    color: 'white',
    children: 'text',
  },
};

export const Gray: Story = {
  args: {
    color: 'gray',
    children: 'text',
  },
};

export const GrayLight: Story = {
  args: {
    color: 'gray-light',
    children: 'text',
  },
};

export const Small: Story = {
  args: {
    size: 'S',
    children: 'text',
  },
};

export const Medium: Story = {
  args: {
    size: 'M',
    children: 'text',
  },
};

export const Large: Story = {
  args: {
    size: 'L',
    children: 'text',
  },
};

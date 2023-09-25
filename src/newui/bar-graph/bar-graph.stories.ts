import type { Meta, StoryObj } from '@storybook/react';

import { BarGraph } from '@/newui';
import { BarGraphProps } from '@/newui/bar-graph/bar-graph.props';

const meta: Meta<BarGraphProps> = {
  title: 'Main/BarGraph',
  component: BarGraph,
};

export default meta;
type Story = StoryObj<BarGraphProps>;

export const Percent25: Story = {
  args: {
    width: 25,
  },
};

export const Percent50: Story = {
  args: {
    width: 50,
  },
};

export const Percent75: Story = {
  args: {
    width: 75,
  },
};

export const Percent100: Story = {
  args: {
    width: 100,
  },
};

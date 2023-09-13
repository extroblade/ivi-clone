import { Meta } from '@storybook/react';

import { Top10Carousel } from '@/UI';

const Top10Wrapper = (data: unknown & JSX.IntrinsicAttributes) => {
  return <Top10Carousel data={data} />;
};

const meta: Meta<typeof Top10Carousel> = {
  title: 'Main/Carousel',
  component: Top10Wrapper,
};

export default meta;

export const Top10 = {
  component: Top10Wrapper,
  data: null,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

import { Meta } from '@storybook/react';

import { TopTenCarousel } from '@/widgets/top-10';

const meta: Meta<typeof TopTenCarousel> = {
  title: 'Main/Carousel',
  component: TopTenCarousel,
};

export default meta;

export const Top10 = {
  component: <TopTenCarousel />,
  data: null,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

import { Meta } from '@storybook/react';

import { PromoCarousel } from '@/widgets/promo/ui/PromoCarousel';

const PromoWrapper = () => {
  return (
    <div className={'container'}>
      <PromoCarousel />
    </div>
  );
};

const meta: Meta<typeof PromoCarousel> = {
  title: 'Main/Carousel',
  component: PromoWrapper,
};

export default meta;

export const Promo = {
  component: PromoWrapper,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

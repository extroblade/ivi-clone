import { Meta } from '@storybook/react';

import { Promo } from '@/widgets/promo/ui/promo';

const PromoWrapper = () => {
  return (
    <div className={'container'}>
      <Promo />
    </div>
  );
};

const meta: Meta<typeof Promo> = {
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

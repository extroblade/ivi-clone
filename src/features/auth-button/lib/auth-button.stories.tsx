import { Meta, StoryObj } from '@storybook/react';

import { AuthButton } from '@/features/auth-button';
import { AuthModal } from '@/features/auth-button/auth-modal';

const AuthWrapper = () => {
  return (
    <>
      <AuthButton />
      <AuthModal />
    </>
  );
};

const meta: Meta<typeof AuthButton> = {
  title: 'Main/Auth',
  component: AuthWrapper,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AuthButton>;

export const Button: Story = {
  args: {},
};

import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumbs } from '@/newui';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Main/Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const ThreePrimary: Story = {
  args: {
    breadcrumbs: [
      { name: 'Мой Иви', path: '/' },
      { name: 'Фильмы', path: '/movies' },
      { name: 'Фильм', path: '/movie' },
    ],
  },
};

export const TwoPrimary: Story = {
  args: {
    breadcrumbs: [
      { name: 'Мой Иви', path: '/' },
      { name: 'Фильмы', path: '/movies' },
    ],
  },
};

export const OnePrimary: Story = {
  args: {
    breadcrumbs: [{ name: 'Мой Иви', path: '/' }],
  },
};

export const ThreeMovie: Story = {
  args: {
    breadcrumbs: [
      { name: 'Мой Иви', path: '/' },
      { name: 'Фильмы', path: '/movies' },
      { name: 'Фильм', path: '/movie' },
    ],
    variant: 'movie',
  },
};

export const TwoMovie: Story = {
  args: {
    breadcrumbs: [
      { name: 'Мой Иви', path: '/' },
      { name: 'Фильмы', path: '/movies' },
    ],
    variant: 'movie',
  },
};

export const OneMovie: Story = {
  args: {
    breadcrumbs: [{ name: 'Мой Иви', path: '/' }],
    variant: 'movie',
  },
};

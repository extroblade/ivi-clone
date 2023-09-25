import { HTMLProps } from 'react';

export type BarGraphProps = {
  width: number;
  color?: 'red' | 'gray';
} & HTMLProps<HTMLDivElement>;

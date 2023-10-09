import { HTMLProps } from 'react';

export type BarGraphProps = {
  width: number;
  rounded?: boolean;
  color?: 'red' | 'gray';
} & HTMLProps<HTMLDivElement>;

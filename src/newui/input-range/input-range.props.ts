import { ReactNode } from 'react';

export type InputRangeProps = {
  minLimit: number;
  maxLimit: number;
  range: number;
  children: ReactNode;
  name: string;
};

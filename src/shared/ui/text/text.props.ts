import { HTMLAttributes, ReactNode } from 'react';

type SizeVariants = 'S' | 'M' | 'L';
type ColorVariants = 'white' | 'gray-light' | 'gray';
export type TextProps = {
  size?: SizeVariants;
  color?: ColorVariants;
  children?: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

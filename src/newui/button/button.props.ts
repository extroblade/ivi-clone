import { ButtonHTMLAttributes, ReactNode } from 'react';

export type AppearanceVariants =
  | 'rectangle'
  | 'square'
  | 'circle'
  | 'red'
  | 'transparent'
  | 'outline'
  | 'gray';
type SizeVariants = 'S' | 'M' | 'L';

export type ButtonProps = {
  children?: ReactNode;
  appearance?: AppearanceVariants;
  size?: SizeVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type TitleProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

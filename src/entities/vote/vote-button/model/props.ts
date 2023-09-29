import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type VoteButtonProps = {
  variant: 'like' | 'dislike';
  isActive: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

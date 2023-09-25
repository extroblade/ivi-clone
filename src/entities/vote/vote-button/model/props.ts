export type VoteButtonProps = {
  variant: 'like' | 'dislike';
  isActive: boolean;
  onClick: () => void;
};

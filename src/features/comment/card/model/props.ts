import { iReviewsItem } from '@/shared/types/kinopoiskTypes';

export type CommentCardProps = {
  comment: iReviewsItem;
  onClick?: () => void;
};

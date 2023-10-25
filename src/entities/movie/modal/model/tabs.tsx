import { AwardsTab, PersonsTab, TrailersTab } from '@/entities/movie/modal/tabs';
import { CommentTab } from '@/entities/movie/modal/tabs/comments/ui/comment-tab';

export const tabs = [
  { element: <PersonsTab />, title: 'categories.creators' },
  { element: <CommentTab />, title: 'categories.comments' },
  { element: <TrailersTab />, title: 'categories.trailers' },
  { element: <AwardsTab />, title: 'categories.awards' },
] as const;

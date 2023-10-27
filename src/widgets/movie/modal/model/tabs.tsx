import { AwardsTab, CommentTab, PersonsTab, TrailersTab } from '@/widgets/movie/modal/tabs';

export const tabs = [
  { element: <PersonsTab />, title: 'categories.creators' },
  { element: <CommentTab />, title: 'categories.comments' },
  { element: <TrailersTab />, title: 'categories.trailers' },
  { element: <AwardsTab />, title: 'categories.awards' },
] as const;

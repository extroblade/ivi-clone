import { AwardsTab, PersonsTab, TrailersTab } from '@/entities/movie/modal/tabs';
import { CommentSection } from '@/features/comment/section/ui/CommentSection';

type TabProps = {
  element: JSX.Element;
  title: string;
};
export const tabs: TabProps[] = [
  { element: <PersonsTab />, title: 'categories.creators' },
  { element: <CommentSection />, title: 'categories.comments' },
  { element: <TrailersTab />, title: 'categories.trailers' },
  { element: <AwardsTab />, title: 'categories.awards' },
];

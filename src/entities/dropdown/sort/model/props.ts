export type SortProps = {
  value?: 'RATING' | 'NUM_VOTE' | 'YEAR';
  title: string;
};

export const defaultSorts: SortProps[] = [
  { value: 'RATING', title: 'sorts.rating' },
  { value: 'NUM_VOTE', title: 'sorts.votes' },
  { value: 'YEAR', title: 'sorts.years' },
];

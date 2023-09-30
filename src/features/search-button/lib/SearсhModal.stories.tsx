import { SearchButton, SearchModal } from '@/features/search-button';

export default {
  title: 'Main/Search',
  component: SearchModal,
};

export const Modal = () => (
  <>
    <SearchButton />
    <SearchModal />
  </>
);

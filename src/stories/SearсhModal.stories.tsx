import { SearchButton, SearchModal } from '@/components';

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

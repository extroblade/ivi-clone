import SearchModal from '@/components/Modals/Search/SearchModal/SearchModal';
import SearchButton from '@/components/Modals/Search/SearchButton/SearchButton';

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

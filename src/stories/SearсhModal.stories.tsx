import SearchModal from '@/components/Modals/SearchModal/SearchModal';
import SearchButton from '@/components/Buttons/SearchButton/SearchButton';

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

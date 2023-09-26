import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { selectModal, setShowSearch } from '@/shared/store';

type useSearchModalProps = {
  isOpen: boolean;
  handleState: (state: boolean) => void;
};
export const useSearchModal = (): useSearchModalProps => {
  const dispatch = useAppDispatch();
  const { showSearch } = useAppSelector(selectModal);
  const handleState = (state: boolean) => dispatch(setShowSearch(state));
  return { isOpen: showSearch, handleState };
};

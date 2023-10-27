import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { selectModal, setShowSearch } from '@/shared/store';

export const useSearchModal = (): {
  isOpen: boolean;
  handleState: (state: boolean) => void;
} => {
  const dispatch = useAppDispatch();
  const { showSearch } = useAppSelector(selectModal);
  const handleState = (state: boolean) => dispatch(setShowSearch(state));
  return { isOpen: showSearch, handleState };
};

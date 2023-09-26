import { selectAuth, setAuthModalState } from '@/features/auth-button/model/slice';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';

type useAuthReturnValue = { isOpen: boolean; handleState: (value: boolean) => void };
export const useAuthModal = (): useAuthReturnValue => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector(selectAuth);
  const handleState = (state: boolean) => dispatch(setAuthModalState(state));
  return { isOpen, handleState: handleState };
};

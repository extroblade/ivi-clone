import { create } from 'zustand';

type AuthModalProps = {
  isOpen: boolean;
  handleState: (payload: boolean) => void;
};
export const useAuthModalStore = create<AuthModalProps>((set) => ({
  isOpen: false,
  handleState: (payload: boolean) => set(() => ({ isOpen: payload })),
}));

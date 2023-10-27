import { create } from 'zustand';

export const useAuthModalStore = create<{
  isOpen: boolean;
  handleState: (payload: boolean) => void;
}>((set) => ({
  isOpen: false,
  handleState: (payload: boolean) => set(() => ({ isOpen: payload })),
}));

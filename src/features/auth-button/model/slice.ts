import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/shared/store';

type InitialStateProps = {
  isOpen: boolean;
};
const initialState: InitialStateProps = {
  isOpen: false,
};
export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    setAuthModalState(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.authModalReducer;
export const { setAuthModalState } = authModalSlice.actions;
export const authModalReducer = authModalSlice.reducer;

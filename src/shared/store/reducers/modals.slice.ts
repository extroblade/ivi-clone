import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/shared/store';

type ModalReducerState = {
  currentTab: number;
  showRating: boolean;
  showSearch: boolean;
  showWatchPageModal: boolean;
  showFooterModal: boolean;
  showUnsub: boolean;
};

const initialState: ModalReducerState = {
  currentTab: 0,
  showUnsub: false,
  showRating: false,
  showSearch: false,
  showWatchPageModal: false,
  showFooterModal: false,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setCurrentTab(state, action: PayloadAction<number>) {
      state.currentTab = action.payload;
    },
    setShowUnsub(state, action: PayloadAction<boolean>) {
      state.showUnsub = action.payload;
    },
    setShowRating(state, action: PayloadAction<boolean>) {
      state.showRating = action.payload;
    },
    setShowSearch(state, action: PayloadAction<boolean>) {
      state.showSearch = action.payload;
    },
    setShowWatchPageModal(state, action: PayloadAction<boolean>) {
      state.showWatchPageModal = action.payload;
    },
    setShowFooterModal(state, action: PayloadAction<boolean>) {
      state.showFooterModal = action.payload;
    },
  },
});

export const selectModal = (state: RootState) => state.modalsReducer;
export const {
  setCurrentTab,
  setShowSearch,
  setShowUnsub,
  setShowRating,
  setShowWatchPageModal,
  setShowFooterModal,
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;

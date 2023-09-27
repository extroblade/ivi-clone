import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/shared/store';
// import { HYDRATE } from 'next-redux-wrapper';
import { iAwards, iFilm, iVideos } from '@/shared/types/kinopoiskTypes';
import { IComment } from '@/shared/types/types';

export interface ICurrentMovie extends iFilm {
  awards?: iAwards;
  duration?: string;
  videos?: iVideos;
  index?: number;
  comments?: IComment;
}

interface iModal {
  showRating: boolean;
  showSearch: boolean;
  showWatchPageModal: boolean;
  showFooterModal: boolean;
  showUnsub: boolean;
  currentMovie?: ICurrentMovie;
}

const initialState: iModal = {
  showUnsub: false,
  showRating: false,
  showSearch: false,
  showWatchPageModal: false,
  showFooterModal: false,
  currentMovie: undefined,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setCurrentMovie(state, action: PayloadAction<any>) {
      state.currentMovie = action.payload;
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
  //>>>>>>
  // extraReducers(builder) {
  //   builder.addCase(HYDRATE, (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.modalsReducer,
  //     };
  //   });
  // },
});

export const selectModal = (state: RootState) => state.modalsReducer;
export const {
  setShowSearch,
  setShowUnsub,
  setShowRating,
  setShowWatchPageModal,
  setShowFooterModal,
  setCurrentMovie,
} = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;

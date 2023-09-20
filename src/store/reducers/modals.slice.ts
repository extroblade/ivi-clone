import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store';
// import { HYDRATE } from 'next-redux-wrapper';
import { iAwards, iFilm, iPerson, iVideos } from '@/types/kinopoiskTypes';
import { IComment } from '@/types/types';

interface ICurrentMovie extends iFilm {
  awards?: iAwards;
  duration?: string;
  videos?: iVideos;
  persons?: iPerson[];
  index?: number;
  comments?: IComment;
}

export interface iAlert {
  id?: string | number;
  title: string;
  extra?: string;
}

interface iModal {
  showAuth: boolean;
  activeAlerts?: iAlert[];
  showRating: boolean;
  showSearch: boolean;
  showWatchPageModal: boolean;
  showFooterModal: boolean;
  showEditProfile: boolean;
  showUnsub: boolean;
  currentMovie?: ICurrentMovie;
}

const initialState: iModal = {
  showAuth: false,
  showUnsub: false,
  showRating: false,
  showSearch: false,
  showWatchPageModal: false,
  showFooterModal: false,
  showEditProfile: false,
  currentMovie: undefined,
  activeAlerts: [],
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setCurrentMovie(state, action: PayloadAction<any>) {
      state.currentMovie = action.payload;
    },
    setActiveAlerts(state, action: PayloadAction<iAlert[]>) {
      state.activeAlerts = action.payload;
    },
    setShowAuth(state, action: PayloadAction<boolean>) {
      state.showAuth = action.payload;
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
    setShowEditProfile(state, action: PayloadAction<boolean>) {
      state.showEditProfile = action.payload;
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
  setShowAuth,
  setShowSearch,
  setShowUnsub,
  setShowRating,
  setShowWatchPageModal,
  setShowFooterModal,
  setShowEditProfile,
  setCurrentMovie,
  setActiveAlerts,
} = modalsSlice.actions;
export default modalsSlice.reducer;

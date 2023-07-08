import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IComment } from '@/types/types';
import { HYDRATE } from 'next-redux-wrapper';
import { iFilm } from '@/types/kinopoiskTypes';

interface ICurrentMovie extends iFilm {
  index?: number;
  comments?: IComment[];
}

export interface iAlert {
  id: string | number;
  title: string;
  extra?: string;
}

interface iModal {
  showAuth: boolean;
  activeAlerts: iAlert[] | null;
  showRating: boolean;
  showSearch: boolean;
  showWatchPageModal: boolean;
  showFooterModal: boolean;
  showEditProfile: boolean;
  showUnsub: boolean;
  currentMovie: ICurrentMovie | null;
}

const initialState: iModal = {
  showAuth: false,
  showUnsub: false,
  showRating: false,
  showSearch: false,
  showWatchPageModal: false,
  showFooterModal: false,
  showEditProfile: false,
  currentMovie: null,
  activeAlerts: null,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setCurrentMovie(state, action: PayloadAction<ICurrentMovie>) {
      state.currentMovie = action.payload;
    },
    setActiveAlerts(state, action: PayloadAction<string | null>) {
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
  extraReducers(builder) {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.modalsReducer,
      };
    });
  },
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

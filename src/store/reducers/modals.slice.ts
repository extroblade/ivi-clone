import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IComment, IMovie } from '@/types/types';
import { HYDRATE } from 'next-redux-wrapper';

interface IPersonModal extends IMovie {
  index?: number;
  comments?: IComment[];
}

interface iModal {
  showAuth: boolean;
  showRating: boolean;
  showSearch: boolean;
  showPersonsModal: boolean;
  showFooterModal: boolean;
  showEditProfile: boolean;
  showUnsub: boolean;
  personModalItem: IPersonModal | null;
}

const initialState: iModal = {
  showAuth: false,
  showUnsub: false,
  showRating: false,
  showSearch: false,
  showPersonsModal: false,
  showFooterModal: false,
  showEditProfile: false,
  personModalItem: null,
};

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setPersonItems: (state, action: PayloadAction<IPersonModal>) => {
      state.personModalItem = action.payload;
    },
    setShowAuth: (state, action: PayloadAction<boolean>) => {
      state.showAuth = action.payload;
    },
    setShowUnsub: (state, action: PayloadAction<boolean>) => {
      state.showUnsub = action.payload;
    },
    setShowRating: (state, action: PayloadAction<boolean>) => {
      state.showRating = action.payload;
    },
    setShowSearch: (state, action: PayloadAction<boolean>) => {
      state.showSearch = action.payload;
    },
    setShowPersonsModal: (state, action: PayloadAction<boolean>) => {
      state.showPersonsModal = action.payload;
    },
    setShowFooterModal: (state, action: PayloadAction<boolean>) => {
      state.showFooterModal = action.payload;
    },
    setShowEditProfile: (state, action: PayloadAction<boolean>) => {
      state.showEditProfile = action.payload;
    },
  },
  //>>>>>>
  extraReducers: (builder) => {
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
  setShowPersonsModal,
  setShowFooterModal,
  setShowEditProfile,
  setPersonItems,
} = modalsSlice.actions;
export default modalsSlice.reducer;

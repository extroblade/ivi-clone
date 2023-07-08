import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { HYDRATE } from 'next-redux-wrapper';

interface iFilters {
  countries?: string[];
  genres?: string[];
  order: 'RATING' | 'NUM_VOTE' | 'YEAR';
  type: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL';
  ratingFrom: number;
  ratingTo: number;
  yearFrom: number;
  yearTo: number;
  page: number;
  keyword?: string;
}

const initialState: iFilters = {
  order: 'RATING',
  type: 'ALL',
  ratingFrom: 0,
  ratingTo: 10,
  yearFrom: 1000,
  yearTo: 3000,
  page: 1,
  keyword: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    resetFilters: () => {
      return initialState;
    },
    setGenres(state, action: PayloadAction<string[]>) {
      state.genres = action.payload;
    },
    setCountries(state, action: PayloadAction<string[]>) {
      state.countries = action.payload;
    },
    setRatingFrom(state, action: PayloadAction<number>) {
      state.ratingFrom = action.payload;
    },
    setRatingTo(state, action: PayloadAction<number>) {
      state.ratingTo = action.payload;
    },
    setYearFrom(state, action: PayloadAction<number>) {
      state.yearFrom = action.payload;
    },
    setYearTo(state, action: PayloadAction<number>) {
      state.yearTo = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
  },
  //>>>>>>
  extraReducers(builder) {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.filtersReducer,
      };
    });
  },
});

export const {
  resetFilters,
  setGenres,
  setCountries,
  setRatingFrom,
  setRatingTo,
  setYearFrom,
  setYearTo,
  setPage,
  setKeyword,
} = filtersSlice.actions;
export const selectFilters = (state: RootState) => state.filtersReducer;
export default filtersSlice.reducer;

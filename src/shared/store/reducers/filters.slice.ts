import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/shared/store';
import { iCountry, iGenre } from '@/shared/types/kinopoiskTypes';
// import { HYDRATE } from 'next-redux-wrapper';
export type FilmType = 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL';
export type FilmOrder = 'RATING' | 'NUM_VOTE' | 'YEAR';

export interface iFilters {
  countries?: iCountry[];
  years: number[];
  genres?: iGenre[];
  country?: iCountry;
  genre?: iGenre;
  order: FilmOrder;
  type: FilmType;
  ratingFrom: number | string;
  ratingTo: number | string;
  yearFrom: number | string;
  yearTo: number | string;
  page: number | string;
  keyword?: string | number;
}

const years = [];
for (let i = 1950; i < 2024; i++) years.push(i);

const initialState: iFilters = {
  order: 'RATING',
  years: years,
  country: undefined,
  genre: undefined,
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
    setOrder(state, action: PayloadAction<FilmOrder>) {
      state.order = action.payload;
    },
    setGenres(state, action: PayloadAction<iGenre[]>) {
      state.genres = action.payload;
    },
    setCountries(state, action: PayloadAction<iCountry[]>) {
      state.countries = action.payload;
    },
    setGenre(state, action: PayloadAction<iGenre>) {
      state.genre = action.payload;
    },
    setCountry(state, action: PayloadAction<iCountry>) {
      state.country = action.payload;
    },
    setRatingFrom(state, action: PayloadAction<number | string>) {
      state.ratingFrom = action.payload;
    },
    setRatingTo(state, action: PayloadAction<number | string>) {
      state.ratingTo = action.payload;
    },
    setYearFrom(state, action: PayloadAction<number | string>) {
      state.yearFrom = action.payload;
    },
    setYearTo(state, action: PayloadAction<number | string>) {
      state.yearTo = action.payload;
    },
    setPage(state, action: PayloadAction<number | string>) {
      state.page = action.payload;
    },
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
  },
  //>>>>>>
  // extraReducers(builder) {
  //   builder.addCase(HYDRATE, (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.filtersReducer,
  //     };
  //   });
  // },
});

export const {
  resetFilters,
  setOrder,
  setGenre,
  setGenres,
  setCountry,
  setCountries,
  setRatingFrom,
  setYearFrom,
  setYearTo,
} = filtersSlice.actions;
export const selectFilters = (state: RootState) => state.filtersReducer;
export const filtersReducer = filtersSlice.reducer;

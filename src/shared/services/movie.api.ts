import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import {
  FilmOrderVariants,
  FilmTypeVariants,
  iAwards,
  iBoxOffice,
  iDistributions,
  iExternalSources,
  iFacts,
  iFetchedFilms,
  iFilm,
  iFilters,
  iImages,
  iReviews,
  iSeasons,
  iSimilar,
  iVideos,
} from '@/shared/types/kinopoiskTypes';

export type QueryParams = {
  countries?: string | number;
  genres?: string | number;
  order?: FilmOrderVariants;
  type?: FilmTypeVariants;
  ratingFrom?: number;
  ratingTo?: number;
  yearFrom?: number | string;
  yearTo?: number | string;
  keyword?: string;
  page?: number;
};

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: process.env.API + 'v2.2/films',
      prepareHeaders: (headers) => {
        headers.set('X-API-KEY', process.env.X_API_KEY || '');
        headers.set('Content-Type', 'application/json');
        return headers;
      },
      mode: 'cors',
    })
  ),
  tagTypes: ['Movies'],
  endpoints: (build) => ({
    fetchFilm: build.query<iFilm, number>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
    fetchAllFilms: build.query<iFetchedFilms, QueryParams>({
      query: ({
        countries,
        genres,
        order,
        type,
        ratingFrom,
        ratingTo,
        yearFrom,
        yearTo,
        keyword,
        page,
      }) => ({
        url: '',
        params: {
          countries,
          genres,
          order,
          type,
          ratingFrom,
          ratingTo,
          yearFrom,
          yearTo,
          keyword,
          page,
        },
      }),
    }),
    fetchTopFilm: build.query<iFetchedFilms, { type?: string; page?: number }>({
      query: ({ type, page = 1 }) => ({
        url: `top`,
        params: { type, page },
      }),
    }),
    fetchFilmPremieres: build.query<iFilm[], { year?: number; month?: number }>({
      query: ({ year = new Date().getFullYear(), month = new Date().getMonth() }) => ({
        url: `premieres`,
        params: { year, month },
      }),
    }),
    fetchFilmFilters: build.query<iFilters, void>({
      query: () => ({
        url: `filters`,
      }),
    }),
    fetchFilmImages: build.query<iImages[], { id: number }>({
      query: ({ id }) => ({
        url: `${id}/images`,
      }),
    }),
    fetchFilmSimilar: build.query<iSimilar, { id: number }>({
      query: ({ id }) => ({
        url: `${id}/similars`,
      }),
    }),
    fetchFilmVideo: build.query<iVideos, { id: number }>({
      query: ({ id }) => ({
        url: `${id}/videos`,
      }),
    }),
    fetchFilmAwards: build.query<iAwards, { id: number }>({
      query: ({ id }) => ({
        url: `${id}/awards`,
      }),
    }),
    fetchFilmBoxOffice: build.query<iBoxOffice[], { id: number }>({
      query: ({ id }) => ({
        url: `${id}/box_office`,
      }),
    }),
    fetchFilmDistributions: build.query<iDistributions[], { id: number }>({
      query: ({ id }) => ({
        url: `${id}/distributions`,
      }),
    }),
    fetchFilmFacts: build.query<iFacts, { id: number }>({
      query: ({ id }) => ({
        url: `${id}/facts`,
      }),
    }),
    fetchFilmSeasons: build.query<iSeasons[], { id: number }>({
      query: ({ id }) => ({
        url: `${id}/seasons`,
      }),
    }),
    fetchFilmExternalSources: build.query<iExternalSources, { id: number | string }>({
      query: ({ id }) => ({
        url: `${id}/external_sources`,
      }),
    }),
    fetchComments: build.query<iReviews, { id: number }>({
      query: ({ id }) => ({
        url: `${id}/reviews`,
      }),
    }),
  }),
});

export const {
  useFetchFilmQuery,
  useFetchAllFilmsQuery,
  useFetchTopFilmQuery,
  useFetchFilmFiltersQuery,
  useFetchFilmSimilarQuery,
  useFetchFilmVideoQuery,
  useFetchFilmAwardsQuery,
  useFetchFilmFactsQuery,
  useFetchFilmExternalSourcesQuery,
  useFetchCommentsQuery,
} = movieApi;

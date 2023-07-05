import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  iAwards,
  iBoxOffice,
  iDistributions,
  iFacts,
  iFilm,
  iFilters,
  iImages,
  iReviews,
  iSeasons,
  iSimilar,
} from '@/types/kinopoiskTypes';

export type QueryParams = {
  countries?: string;
  genres?: string;
  order?: 'RATING' | 'NUM_VOTE' | 'YEAR';
  type?: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL';
  ratingFrom?: number;
  ratingTo?: number;
  yearFrom?: number;
  yearTo?: number;
  keyword?: string;
  page?: number;
};

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API + 'v2.2/films',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', process.env.X_API_KEY); //process.env.X_API_KEY
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Movies'],
  endpoints: (build) => ({
    fetchAllFilms: build.query<iFilm[], QueryParams>({
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
        url: '/',
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
    fetchTopFilm: build.query<iFilm[], any>({
      query: ({ type, page = 1 }) => ({
        url: `/top`,
        params: { type, page },
      }),
    }),
    fetchFilmFilters: build.query<iFilters[], Record<string, string>>({
      query: () => ({
        url: `/filters`,
      }),
    }),
    fetchFilmImages: build.query<iImages[], number>({
      query: ({ id }) => ({
        url: `/${id}/images`,
      }),
    }),
    fetchFilmSimilars: build.query<iSimilar[], number>({
      query: ({ id }) => ({
        url: `/${id}/similars`,
      }),
    }),
    fetchFilmVideos: build.query<any[], number>({
      query: ({ id }) => ({
        url: `/${id}/videos`,
      }),
    }),
    fetchFilmAwards: build.query<iAwards[], number>({
      query: ({ id }) => ({
        url: `/${id}/awards`,
      }),
    }),
    fetchFilmBoxOffice: build.query<iBoxOffice[], number>({
      query: ({ id }) => ({
        url: `/${id}/box_office`,
      }),
    }),
    fetchFilmDistributions: build.query<iDistributions[], number>({
      query: ({ id }) => ({
        url: `/${id}/distributions`,
      }),
    }),
    fetchFilmFacts: build.query<iFacts[], number>({
      query: ({ id }) => ({
        url: `/${id}/facts`,
      }),
    }),
    fetchFilmSeasons: build.query<iSeasons[], number>({
      query: ({ id }) => ({
        url: `/${id}/seasons`,
      }),
    }),
    fetchFilmReviews: build.query<iReviews[], number>({
      query: ({ id }) => ({
        url: `/${id}/seasons`,
      }),
    }),
    fetchOneFilm: build.query<iFilm, number>({
      query: ({ id }) => ({
        url: `/${id}`,
      }),
    }),
    // providesTags: (result) =>
    //   result?.length
    //     ? [...result.map(({ id }) => ({ type: 'Movies', id })), { type: 'Movies', id: 'LIST' }]
    //     : [{ type: 'Movies', id: 'LIST' }],
    // addOneFilm: build.mutation<IMovie | IMovieOld, IMovie | IMovieOld>({
    //   query: (movie) => ({
    //     url: '/',
    //     method: 'POST',
    //     body: movie,
    //   }),
    //   invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
    // }),
    // updateMovie: build.mutation<IMovie | IMovieOld, IMovie | IMovieOld>({
    //   query: (movie) => ({
    //     url: `/${movie.id}`,
    //     method: 'PUT',
    //     body: movie,
    //   }),
    //   invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
    // }),
    // deleteOneFilm: build.mutation<IMovie | IMovieOld, string>({
    //   query: (id) => ({
    //     url: `/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: [{ type: 'Movies', id: 'LIST' }],
    // }),
  }),
});

export const {
  useFetchAllFilmsQuery,
  useFetchTopFilmQuery,
  useFetchFilmFiltersQuery,
  useFetchFilmImagesQuery,
  useFetchFilmSimilarsQuery,
  useFetchFilmVideoQuery,
  useFetchFilmAwardsQuery,
  useFetchFilmBoxOfficesQuery,
  useFetchFilmDistributionsQuery,
  useFetchFilmFactsQuery,
  useFetchFilmSeasonsQuery,
  useFetchFilmReviewsQuery,
  useFetchOneFilmQuery,
} = movieApi;

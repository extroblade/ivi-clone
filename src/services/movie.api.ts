import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { iFilm } from '@/types/kinopoiskTypes';

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
  useFetchOneFilmQuery,
  // useDeleteOneFilmMutation,
  // useAddOneFilmMutation,
} = movieApi;

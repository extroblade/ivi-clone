import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  iAwards,
  iBoxOffice,
  iDistributions,
  iExternalSources,
  iFacts,
  iFilm,
  iFilters,
  iImages,
  iReviews,
  iSeasons,
  iSimilar,
} from '@/types/kinopoiskTypes';
import { FilmOrder, FilmType } from '@/store/reducers/filters.slice';

export type QueryParams = {
  countries?: string;
  genres?: string;
  order?: FilmOrder;
  type?: FilmType;
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
      headers.set('X-API-KEY', process.env.X_API_KEY || '');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
    mode: 'cors',
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
    fetchTopFilm: build.query<iFilm[], any>({
      query: ({ type, page = 1 }) => ({
        url: `top`,
        params: { type, page },
      }),
    }),
    fetchFilmPremieres: build.query<iFilm[], any>({
      query: ({ year = new Date().getFullYear(), month = new Date().getMonth() }) => ({
        url: `premieres`,
        params: { year, month },
      }),
    }),
    fetchFilmFilters: build.query<iFilters, null>({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      query: (_) => ({
        url: `filters`,
      }),
    }),
    fetchFilmImages: build.query<iImages[], { id: number }>({
      query: ({ id }) => ({
        url: `${id}/images`,
      }),
    }),
    fetchFilmSimilars: build.query<iSimilar[], { id: number }>({
      query: ({ id }) => ({
        url: `${id}/similars`,
      }),
    }),
    fetchFilmVideo: build.query<any[], { id: number }>({
      query: ({ id }) => ({
        url: `${id}/videos`,
      }),
    }),
    fetchFilmAwards: build.query<iAwards[], { id: number }>({
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
    fetchFilmExternalSources: build.query<iExternalSources[], { id: number }>({
      query: ({ id }) => ({
        url: `${id}/external_sources`,
      }),
    }),
    fetchOneFilm: build.query<iFilm, { id: number }>({
      query: ({ id }) => ({
        url: `${id}`,
      }),
    }),
    fetchComments: build.query<iReviews, { id: number }>({
      query: ({ id }) => ({
        url: `${id}/reviews`,
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
  useFetchFilmPremieresQuery,
  useFetchFilmFiltersQuery,
  useFetchFilmImagesQuery,
  useFetchFilmSimilarsQuery,
  useFetchFilmVideoQuery,
  useFetchFilmAwardsQuery,
  useFetchFilmDistributionsQuery,
  useFetchFilmFactsQuery,
  useFetchFilmSeasonsQuery,
  useFetchFilmExternalSourcesQuery,
  useFetchOneFilmQuery,
  useFetchCommentsQuery,
} = movieApi;

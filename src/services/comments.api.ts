import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { iReviews } from '@/types/kinopoiskTypes';

export const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', process.env.X_API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Comments'],
  endpoints: (build) => ({
    fetchComments: build.query<iReviews, number>({
      query: ({ id }) => ({
        url: `/v2.2/films/${id}/reviews`,
      }),
    }),
  }),
});

export const { useFetchCommentsQuery } = commentsApi;

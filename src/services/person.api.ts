import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { iPerson } from '@/types/kinopoiskTypes';

export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', process.env.X_API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchAllPersons: build.query<iPerson[], number>({
      query: ({ filmId }) => ({
        url: '/v1/staff',
        params: { filmId },
      }),
    }),
    fetchOnePerson: build.query<iPerson, number>({
      query: ({ id }) => ({
        url: `/v1/staff/${id}`,
      }),
    }),
  }),
});

export const { useFetchAllPersonsQuery, useFetchOnePersonQuery } = personApi;

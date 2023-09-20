import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { iPerson } from '@/types/kinopoiskTypes';

export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API,
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', process.env.X_API_KEY || '');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchAllPersons: build.query<iPerson[], { filmId: number }>({
      query: ({ filmId }) => ({
        url: '/v1/staff',
        params: { filmId },
      }),
    }),
    fetchOnePerson: build.query<iPerson, { id: number }>({
      query: ({ id }) => ({
        url: `/v1/staff/${id}`,
      }),
    }),
    fetchPersonName: build.query<iPerson, { name: string; page: number }>({
      query: ({ name, page = 1 }) => ({
        url: `/v1/persons`,
        params: { name, page },
      }),
    }),
  }),
});

export const { useFetchAllPersonsQuery, useFetchOnePersonQuery, useFetchPersonNameQuery } =
  personApi;

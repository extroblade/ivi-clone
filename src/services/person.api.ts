import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPersonOld } from '@/types/types';

export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.SERVER + '/persons',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', process.env.X_API_KEY);
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Person'],
  endpoints: (build) => ({
    fetchAllPersons: build.query<IPersonOld[]>({
      query: () => ({
        url: '/',
      }),
      providesTags: () => ['Person'],
    }),
    fetchOnePerson: build.query<IPersonOld, number | string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: () => ['Person'],
    }),
  }),
});

export const { useFetchAllPersonsQuery, useFetchOnePersonQuery } = personApi;

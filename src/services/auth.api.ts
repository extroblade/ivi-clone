import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface iAuth {
  email?: string;
  password?: string;
}

interface iRegister {
  email?: string;
  password?: string;
  url?: string;
  name?: string;
  surname?: string;
  country?: string;
  city?: string;
  photo?: unknown;
}

// prepareHeaders: (headers, { getState }) => {
//   const token = getState().auth.token;
//   if (token) {
//     headers.set('authorization', `Bearer ${token}`);
//   }
//   return headers;
// },

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.SERVER,
    credentials: 'same-origin',
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem('token');
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
        //headers.set('Content-Type', 'application/json');
      }
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
      return headers;
    },
  }),
  tagTypes: ['Auth'],
  endpoints: (build) => ({
    register: build.mutation({
      query: (body: iRegister | any) => {
        return {
          url: '/registration',
          method: 'POST',
          body,
        };
      },
      providesTags: () => ['Auth'],
    }),
    login: build.mutation({
      query: (body: iAuth | any) => {
        return {
          url: '/auth/login',
          method: 'POST',
          body: body,
        };
      },
      providesTags: () => ['Auth'],
    }),
    googleLogin: build.query({
      query: () => {
        return {
          url: '/auth/google/login',
        };
      },
      providesTags: () => ['Auth'],
    }),
    logout: build.mutation({
      query: () => {
        return {
          url: '/auth/logout', ///////
        };
      },
      providesTags: () => ['Auth'],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGoogleLoginQuery, useLogoutMutation } =
  authApi;

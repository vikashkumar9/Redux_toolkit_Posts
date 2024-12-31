
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
        query: ({ page = 1, limit = 10 }) => ({
          url: '/posts',
          params: { _page: page, _limit: limit },
        }),
      providesTags: ['Posts'],
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Posts'],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE', 
      }),
      invalidatesTags: ['Posts'],
    }),
    getPostById: builder.query({
        query: (id) => `/posts/${id}`,
        providesTags: ['Posts'],
      }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostByIdQuery
} = postsApi;

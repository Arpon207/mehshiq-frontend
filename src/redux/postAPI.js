import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const postsSlice = createApi({
  reducerPath: "postsSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mehshiq-backend.vercel.app/api/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/categories/get",
    }),
  }),
});

export const { useGetPostsQuery } = postsSlice;

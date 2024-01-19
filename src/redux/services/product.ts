import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TProduct } from "../../types";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      {
        products: TProduct[];
        limit: number;
        skip: number;
        total: number;
      },
      number | void
    >({
      query: (limit = 10) => `/?limit=${limit}`,
    }),
    getProduct: builder.query<TProduct, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = productApi;

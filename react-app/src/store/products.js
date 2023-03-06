import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { localMarketBaseUrl } from "config/api";

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: localMarketBaseUrl
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        getProductById: builder.query({
            query: (id) => `/posts?id=${id}`
        }),
        getCategories: builder.query({
            query: () => '/products/categories'
        }),
        getCategoryById: builder.query({
            query: (id) => `/products/categories?id=${id}`
        }),
        getSales: builder.query({
            query: () => '/sales'
        }),
        getSaleById: builder.query({
            query: (id) => `/sales?id=${id}`
        }),
        setProduct: builder.mutation({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: product
            })
        }),
        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PUT',
                body: product
            })
        })
    })
})

export const { useGetProductsQuery } = apiSlice
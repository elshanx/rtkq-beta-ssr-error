import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  refetchOnFocus: false,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: build => ({
    getPokemon: build.query<any, void>({
      query: () => ({ url: '/', method: 'GET' }),
    }),
  }),
})

export const {
  useGetPokemonQuery,
  util: { getRunningOperationPromises },
} = productApi

export const {
  endpoints: { getPokemon },
} = productApi

export default productApi

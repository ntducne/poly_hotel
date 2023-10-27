import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const roomApi = createApi({
    reducerPath: "rooms",
    tagTypes: ['Rooms'],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_URL_API,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("access_token");
            headers.set("authorization", `Bearer ${token}`)
            // modify header theo từng request
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getRooms: builder.query<any, any>({
            query: (data: any) => {
                return ({
                    method: 'GET',
                    url: `/client/room`
                })
            },
            providesTags: ["Rooms"]
        }),
        getDetial: builder.query<any, any>({
            query: (id) => `/client/room/${id}`,
            providesTags: ["Rooms"]
        })
    })
})

export const { useGetRoomsQuery, useGetDetialQuery } = roomApi
export default roomApi
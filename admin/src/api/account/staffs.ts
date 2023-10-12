import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { cookies } from "../../config/cookies";

export const staffsApi = createApi({
  reducerPath: "staffs",
  tagTypes: ["Staffs"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.polydevhotel.site/admin",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${JSON.parse(cookies().Get('AuthUser') as any)[2]}`)
    }
  }),
  endpoints: (builder) => ({
    getAllStaffs: builder.query({
      query: () => ({
        url: `/staffs`,
        method: "GET",
      }),
      providesTags: ["Staffs"],
    }),
  }),

});


export const { useGetAllStaffsQuery } = staffsApi;

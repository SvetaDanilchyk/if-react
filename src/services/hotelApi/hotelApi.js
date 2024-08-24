import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//const
import { hotelsUrl } from "../const";

export const hotelApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({ baseUrl: hotelsUrl }),
  endpoints: (builder) => ({
    searchHotels: builder.query({
      query: ({ search, dateFrom, dateTo, adults, children, room }) => ({
        url: "/",
        params: {
          search,
          dateFrom,
          dateTo,
          adults,
          children,
          room,
        },
      }),
    }),
  }),
});

export const { useSearchHotelsQuery } = hotelApi;

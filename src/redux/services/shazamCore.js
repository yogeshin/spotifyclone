import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreAPI = createApi({
  reducerPath: "shazamCoreAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: () => {
      headers.set(
        "X-RapidAPI-Key",
        "f0d81252abmsh2190fa177542416p12cfd6jsn69d4626f5563"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/list" }),
  }),
});

export const { useGetTopChartQuery } = shazamCoreAPI;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHouses } from "../../features/faker/fake-post";

// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = "https://bachelors-home-server.vercel.app/api/v1/";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    /*  const token = (getState() as RootState).auth.token;

        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        } */

    return headers;
  },
});

const baseAPI = createApi({
  tagTypes: ["hostelMemberRequest", "product", "hostelAdd", "hostelBooking"],
  baseQuery,
  endpoints: (builder) => ({
    availableHouses: builder.query<IHouses, string>({
      query: (query) => ({
        url: `houses${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useAvailableHousesQuery } = baseAPI;

export default baseAPI;

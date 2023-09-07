import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import { IHouses } from "../../features/faker/fake-post";

// const baseUrl = process.env.REACT_APP_BASE_URL;
const baseUrl = "https://bachelors-home-server.vercel.app/api/";

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
  // tagTypes: ["hostelMemberRequest", "product", "hostelAdd", "hostelBooking"],
  baseQuery,
  endpoints: (builder) => ({
    availableHouses: builder.query<IHouses, string>({
      query: (query) => ({
        url: `v1/houses${query}`,
        method: "GET",
      }),
    }),

    submitHouses: builder.mutation<IHouses, void>({
      query: (credentials) => ({
        url: "v1/houses",
        method: "POST",
        body: credentials,
      }),

      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          toast.success("House Successfully Submitted");
        } catch (error: any) {
          const message = error?.error?.data || "Something Went Wrong";
          toast.error(message);
        }
      },
    }),
  }),
});

export const { useAvailableHousesQuery, useSubmitHousesMutation } = baseAPI;

export default baseAPI;

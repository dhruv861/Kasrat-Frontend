import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { setUser, setUserFav } from "../UserSlice";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/accounts/`,
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("access");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    
    getUserDetails: builder.query({
      query() {
        return {
          url: "profile",
          credentials: "include",
          // Authorization: `Bearer ${data.access}`
        };
      },
      providesTags: ["User"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          /* empty */
        }
      },
    }),
    toggleFav: builder.mutation({
      query({ exId, action }) {
        return {
          url: `exercises/favourites/?action=${action}&ex_id=${exId}`,
          method: "POST",
        };
      },
      async onQueryStarted(args,{dispatch, queryFulfilled}) {
        const {data} = await queryFulfilled;
        dispatch(setUserFav(data.exercises));
      }
    }),
  }),
});

export const { useGetUserDetailsQuery } = userApi;

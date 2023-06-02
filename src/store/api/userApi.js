import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import {
  //  setUser,
  setUserFav,
  setPlan,
  setUser
} from "../UserSlice";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;

export const userApi = createApi({
  reducerPath: "userApi",
  keepUnusedDataFor: 3,
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
  // tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query() {
        return {
          url: "profile",
          credentials: "include",
        };
      },
      // providesTags: ["User"],
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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setUserFav(data.exercises));
      },
    }),
    savePlan: builder.mutation({
      query({ plan, plan_type }) {
        return {
          url: `exercise-plan/save/?plan_type=${plan_type}`,
          method: "POST",
          body: { plan },
        };
      },
      async onQueryStarted(args,{dispatch,queryFulfilled}){
        await queryFulfilled
        console.log("fullfiled")
        dispatch(userApi.endpoints.getPlan.initiate())
      }
    }),
    getPlan: builder.query({
      query() {
        return {
          url: `exercise-plan/save/`,
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        try {
          dispatch(setPlan(data));
        } catch (e) {
          console.log(e);
        }
      },
    }),
    updateProfile: builder.mutation({
      query(data) {
        return {
          url: "profile/update/",
          method: "POST",
          body: data,
        };
      },
      async onQueryStarted(args, { dispatch ,queryFulfilled}) {
        const { data } = await queryFulfilled;
        dispatch(userApi.endpoints.getUserDetails.initiate());
      },
    }),
  }),
});

export const { useGetUserDetailsQuery } = userApi;

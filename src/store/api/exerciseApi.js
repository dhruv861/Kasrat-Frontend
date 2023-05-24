import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_BACKEND_BASEURL;

export const exerciseAPi = createApi({
  reducerPath: "exerciseAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/exercises/`,
  }),
  endpoints: (builder) => ({
    getExercises: builder.query({
      query() {
        return {
          url: "",
        };
      },
    }),
    getExerciseById: builder.query({
        query(id){
            return {
                url:`${id}/`
            }
        }
    }),

    getBodyParts: builder.query({
      query() {
        return {
          url: "bodyparts/",
        };
      },
    }),
    filterExerciseByTarget: builder.query({
      query(target) {
        return {
          url: `filter/?target=${target}`,
        };
      },
    }),
    filterExerciseByBodyPart: builder.query({
      query(bodyPart ) {
        return {
          url: `filter/?bodyPart=${bodyPart}`,
        };
      },
    }),
    filterExercisebyEquipment: builder.query({
      query(equipment ) {
        return {
          url: `filter/?equipment=${equipment}`,
        };
      },
    }),
    getExercisePlan:builder.mutation({
      query(preferences){
        return {
          url: "exercise-plan/generate/",
          method:"POST",
          body:preferences
        };
      }
    })
  }),
});

export const {
  useFilterExerciseByTargetQuery,
  useFilterExerciseByBodyPartQuery,
  useFilterExercisebyEquipmentQuery,
  useGetBodyPartsQuery,
  useGetExercisesQuery,
  useGetExerciseByIdQuery,
  useGetExercisePlanMutation
} = exerciseAPi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealPlanApi = createApi({
  reducerPath: "mealPlanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spoonacular.com/",
    prepareHeaders: (headers) => {
      headers.set("x-api-key", "88c8fed4d53141a79ce1c0c029c09019");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMealPlan: builder.query({
      query(preference) {
        return {
          url: `/mealplanner/generate?timeFrame=week&targetCalories=${preference.calories}&diet=${preference.diet}`,
        };
      },
    }),
    getRecipeInformation: builder.query({
        query(id) {
            return {
              url: `/recipes/${id}/information?includeNutrition=true`,
            };
        }
    })
  }),
});

export const {useGetMealPlanQuery,useGetRecipeInformationQuery} = mealPlanApi

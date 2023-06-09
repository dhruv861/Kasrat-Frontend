import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./ExerciseSlice";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import userReducer from "./UserSlice";
import { exerciseAPi } from "./api/exerciseApi";
import { workshopApi } from "./api/workshopApi";
import { mealPlanApi } from "./api/mealPlanApi";

export const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [exerciseAPi.reducerPath]: exerciseAPi.reducer,
    [workshopApi.reducerPath]: workshopApi.reducer,
    [mealPlanApi.reducerPath]: mealPlanApi.reducer,
    userProfile: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      userApi.middleware,
      exerciseAPi.middleware,
      workshopApi.middleware,
      mealPlanApi.middleware,
    ]),
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  exerciseplan:null
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      window.localStorage.removeItem("access");
      window.localStorage.removeItem("refresh");
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserFav: (state, action) => {
      if(state.user){
      state.user.favourites=action.payload;
      }
    },
    setExercisePlan:(state, action) => {
      state.exerciseplan = action.payload;
    }
  },
});

export default UserSlice.reducer;

export const { setUser, logout ,setUserFav ,setExercisePlan} = UserSlice.actions;

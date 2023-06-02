import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";


const initialState = {
  user: null,
  plan:null
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      window.localStorage.removeItem("access");
      window.localStorage.removeItem("refresh");
      const result=userApi.endpoints.getUserDetails.initiate()
      result.unsubscribe()
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserFav: (state, action) => {
      if(state.user){
      state.user.favourites=action.payload;
      }
    },
    setPlan:(state, action) => {
      state.plan = action.payload;
    }
  },
});

export default UserSlice.reducer;

export const { setUser, logout ,setUserFav ,setPlan} = UserSlice.actions;

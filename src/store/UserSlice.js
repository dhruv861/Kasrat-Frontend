import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
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
  },
});

export default UserSlice.reducer;

export const { setUser, logout } = UserSlice.actions;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  exercises: [],
  bodyParts: ["all"],
};
// eslint-disable-next-line no-undef
const API_URL = process.env.REACT_APP_BACKEND_BASEURL;

export const fetchExercisesData = createAsyncThunk(
  "exercise/fetchExercisesData",
  async () => {
    return axios.get(`${API_URL}/exercises/`).then((response) => response.data);
  }
);

export const fetchExercisesDataById = createAsyncThunk(
  "exercise/fetchExercisesDataById",
  async (id) => {
    return axios
      .get(`${API_URL}/exercises/${id}`)
      .then((response) => response.data);
  }
);

const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    setExercises: (state, action) => {
      state.exercises = action.payload;
    },
    setBodyParts: (state, action)=> {
      state.bodyParts = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExercisesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchExercisesData.fulfilled, (state, action) => {
      state.loading = false;
      state.exercises = action.payload;
    });
    builder.addCase(fetchExercisesData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { setExercises,setBodyParts } = exerciseSlice.actions;
export default exerciseSlice.reducer;



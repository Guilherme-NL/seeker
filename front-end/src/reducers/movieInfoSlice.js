import { createSlice } from "@reduxjs/toolkit";

export const movieInfoSlice = createSlice({
  name: "movieInfo",
  initialState: {
    value: null,
  },
  reducers: {
    setMovieInfo: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = null;
    },
  },
});

export const { setMovieInfo, reset } = movieInfoSlice.actions;

export default movieInfoSlice.reducer;

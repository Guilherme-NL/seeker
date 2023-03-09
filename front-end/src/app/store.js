import { configureStore } from "@reduxjs/toolkit";
import movieInfoReducer from "../reducers/movieInfoSlice";

export default configureStore({
  reducer: {
    movieInfo: movieInfoReducer,
  },
});

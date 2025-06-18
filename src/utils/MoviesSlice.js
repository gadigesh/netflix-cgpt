import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    nowplayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    nowplayingMovies: (state, action) => {
      state.nowplayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { nowplayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;

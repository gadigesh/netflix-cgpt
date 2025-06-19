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
    addPapularMovies: (state, action) => {
      state.addPapularMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.addTopratedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.addUpcomingMovies = action.payload;
    },
  },
});

export const {
  nowplayingMovies,
  addTrailerVideo,
  addPapularMovies,
  addTopratedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;

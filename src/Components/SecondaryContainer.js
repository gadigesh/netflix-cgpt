import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-40 relative z-20">
        {movie.nowplayingMovies && (
          <MovieList
            title={"Now Playing Movies"}
            movies={movie.nowplayingMovies}
          />
        )}
        {movie.addPapularMovies && (
          <MovieList title={"Popular Movies"} movies={movie.addPapularMovies} />
        )}
        {movie.addTopratedMovies && (
          <MovieList
            title={"Toprated Movies"}
            movies={movie.addTopratedMovies}
          />
        )}
        {movie.addUpcomingMovies && (
          <MovieList
            title={"Up Coming Movies"}
            movies={movie.addUpcomingMovies}
          />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;

import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="px-6">
      <h1 className="py-4 text-white text-xl md:text-2xl">{title}</h1>
      <div
        className="flex overflow-x-scroll cursor-pointer"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

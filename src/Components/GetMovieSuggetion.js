import React from 'react'
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GetMovieSuggetion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="m-2 p-3 bg-black text-white bg-opacity-80">
      {movieNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GetMovieSuggetion
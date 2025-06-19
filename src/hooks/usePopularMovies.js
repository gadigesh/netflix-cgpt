import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { useEffect } from "react";
import { addPapularMovies } from "../utils/MoviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getpopularMoies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPapularMovies(json.results));
  };
  useEffect(() => {
    getpopularMoies();
  }, []);
};

export default usePopularMovies;

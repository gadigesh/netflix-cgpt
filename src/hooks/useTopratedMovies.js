import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { useEffect } from "react";
import { addTopratedMovies } from "../utils/MoviesSlice";

const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const getTopratedMoies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopratedMovies(json.results));
  };
  useEffect(() => {
    getTopratedMoies();
  }, []);
};

export default useTopratedMovies;

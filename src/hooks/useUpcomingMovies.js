import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/MoviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMoies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMoies();
  }, []);
};

export default useUpcomingMovies;

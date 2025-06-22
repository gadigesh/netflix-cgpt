import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constant";
import { useEffect } from "react";
import { nowplayingMovies } from "../utils/MoviesSlice";

const useNowPlayingMovues = () => {
  const dispatch = useDispatch();
  const nowplayingMovie = useSelector((store) => store.nowplayingMovies);
  const getNowPlayingMoies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(nowplayingMovies(json.results));
  };
  useEffect(() => {
    !nowplayingMovie && getNowPlayingMoies();
  }, []);
};

export default useNowPlayingMovues;

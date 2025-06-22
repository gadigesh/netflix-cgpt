import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch } from "react-redux";

const useGptSearch = (searchText) => {
  const dispatch = useDispatch();
  const searchMovieInTMDB = async (movie) => {
    //search movie in TMDB
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=true&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearch = async () => {
    if (!searchText.current.value) return null;
    const gptQuery =
      "Act as movie recommended system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example given ahead, Example result: Gadar,Sholay,Don,Golmal,Koi mil gaya";
    //I ahve madeapi call for gpt results
    const gptresults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });
    if (!gptresults.choices) {
      //handle erroes
    }
    //console.log(gptresults.choices?.[0]?.message?.content);
    const gptMovies = gptresults.choices?.[0]?.message?.content?.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieInTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return { handleGptSearch };
};

export default useGptSearch;

import lang from "../utils/langCantant";
import { useSelector } from "react-redux";
import { useRef } from "react";
import useGptSearch from "../hooks/useGptSearch";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const { handleGptSearch } = useGptSearch(searchText);

  return (
    langKey && (
      <div className="pt-[40%] md:pt-[20%] flex justify-center">
        <form
          className="w-full md:w-1/2 bg-black grid grid-cols-12 justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            handleGptSearch();
          }}
        >
          <input
            ref={searchText}
            type="text"
            className="p-2 md:p-4 m-4 col-span-9"
            placeholder={lang[langKey].getSearchPlaceholder}
          />
          <button className="p-2 m-4 bg-red-600 col-span-3 text-white rounded-lg">
            {lang[langKey].Search}
          </button>
        </form>
      </div>
    )
  );
};

export default GptSearchBar;

import React from "react";
import lang from "../utils/langCantant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log(langKey);
  return (
    langKey && (
      <div className="pt-[20%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12 justify-center">
          <input
            type="text"
            className="p-4 m-4 col-span-9"
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

import React from "react";
import GptSearchBar from "./GptSearchBar";
import GetMovieSuggetion from "./GetMovieSuggetion";
import { BACKGROUND } from "../utils/Constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BACKGROUND}
          alt="Background"
        />
      </div>
      <div>
        <GptSearchBar />
        <GetMovieSuggetion />
      </div>
    </>
  );
};

export default GptSearch;

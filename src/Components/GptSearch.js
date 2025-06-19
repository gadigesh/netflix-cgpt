import React from "react";
import GptSearchBar from "./GptSearchBar";
import GetMovieSuggetion from "./GetMovieSuggetion";
import { BACKGROUND } from "../utils/Constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BACKGROUND} alt="Background" />
      </div>
      <GptSearchBar />
      <GetMovieSuggetion />
    </div>
  );
};

export default GptSearch;

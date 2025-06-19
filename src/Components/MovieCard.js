import React from "react";
import { IMG_CDNURL } from "../utils/Constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDNURL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;

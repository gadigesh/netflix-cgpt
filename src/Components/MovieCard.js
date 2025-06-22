import React, { useState } from "react";
import { IMG_CDNURL } from "../utils/Constant";

const MovieCard = ({ posterPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!posterPath) return null;
  return (
    <>
      <div className="w-28 md:w-48 pr-4 z-99999 relative">
        <img
          src={IMG_CDNURL + posterPath}
          alt="Movie Card"
          onClick={() => setIsOpen(true)}
        />
      </div>
      {/* {isOpen && (
        <div className="mt-96 pr-4  flex items-center justify-center z-50">
          <div className=" bg-zinc-900 p-6 rounded-xl  md:w-1/2 lg:w-1/3 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✖
            </button>
            {/* <img
              className="hover:scale-125 z-9999 transition-transform duration-300"
              src={IMG_CDNURL + posterPath}
              alt="Movie Card"
            /> 
            <img
              src={IMG_CDNURL + posterPath}
              alt="big movie"
              className="w-full rounded-lg mb-4"
            />
            <h2 className="text-2xl text-white font-bold mb-2">big movie</h2>
            <p className="text-gray-300">big movie super</p>
          </div>
        </div>
      )} */}
    </>
  );
};

export default MovieCard;

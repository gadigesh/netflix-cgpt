import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[16%]  px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold hidden md:block">{title}</h1>
      <p className="py-6 text-lg w-1/4 hidden md:block">{overview}</p>
      <div className="w-26 flex">
        <button className="bg-white text-black w-18 px-6 py-2 rounded-xl mx-6 text-lg hover:bg-opacity-80 hidden md:block">
          ▶️ Play
        </button>
        <button className="bg-gray-700 text-white w-18 px-6 py-2 rounded-xl mx-6 text-lg hidden md:block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

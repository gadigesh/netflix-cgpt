import React from "react";
import Header from "./Header";
import useNowPlayingMovues from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovues();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
      main moview container 
        - video container 
        - video header
      secondary container
        - MovieList * n
          - cards * n
      
      
      
      
       */}
    </div>
  );
};

export default Browse;

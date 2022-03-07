import React from "react";
import "../css/Movies.css";
import "../css/WatchLaterList.css";

import { useLocation, Link } from "react-router-dom";

import ScrollTop from "./ScrollTop";
import Back from "../images/back.png";
import EmptyResults from "./EmptyResults";
import Movies from "./Movies";

const WatchLaterList = () => {
  const movieWatchLater = JSON.parse(localStorage.getItem("movieWatchLater"));
  const locationIsWatch = useLocation();
  let renderedMovies;

  if (movieWatchLater) {
    renderedMovies = movieWatchLater.map((movie, i) => {
      return (
        <Movies movies={movie} key={i} locationIsWatch={locationIsWatch} />
      );
    });
  }

  return (
    <div className="main-content">
      <div className="movies-w-title">
        <div>
          <Link to="/">
            <img src={Back} alt="back" />
          </Link>
        </div>
        <div className="main-element">List you have saved to watch !</div>
      </div>
      {/* <div className="box">List you have saved to watch !</div> */}
      <div>
        {renderedMovies ? (
          renderedMovies
        ) : (
          <EmptyResults text="Nothing added yet !" />
        )}
      </div>
      <ScrollTop />
    </div>
  );
};

export default WatchLaterList;

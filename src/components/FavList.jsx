import React from "react";
import "../css/Movies.css";
import "../css/WatchLaterList.css";

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import ScrollTop from "./ScrollTop";
import Back from "../images/back.png";
import EmptyResults from "./EmptyResults";
import Movies from "./Movies";

const FavList = () => {
  const favList = JSON.parse(localStorage.getItem("movieFavourites"));
  const locationIsWatch = useLocation();
  let renderedMovies;

  if (favList) {
    renderedMovies = favList.map((movie, i) => {
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

        <div className="main-element">List you have saved as Favourite !</div>
      </div>
      {/* <div className="box">List you have saved to watch !</div> */}
      <div>
        {" "}
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

export default FavList;

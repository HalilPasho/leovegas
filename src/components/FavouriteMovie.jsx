import React from "react";
import "../css/FavouriteMovie.css";
import Active from "../images/active-star.png";
import Inactive from "../images/inactive-star.png";

function FavouriteImage({ active, handleChangeActive }) {
  return (
    <div className="movies-favourite-container">
      <div className="toggle-wrapper">
        {active ? (
          <img
            className="active"
            src={Active}
            alt="yellow star"
            onClick={() => handleChangeActive()}
          />
        ) : (
          <img
            className="inactive"
            src={Inactive}
            alt="black and white star"
            onClick={() => handleChangeActive()}
          />
        )}
      </div>
    </div>
  );
}

export default FavouriteImage;

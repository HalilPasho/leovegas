import { useState } from "react";
import "../css/Movies.css";
import { useLocation } from "react-router-dom";
import { getImage } from "../API/ImagePath";

import FavouriteMovie from "./FavouriteMovie";
import WatchLater from "./WatchLater";

const Movies = (props) => {
  const [active, setActive] = useState(false);
  const [watchLater, setWatchLater] = useState(false);
  const locationIsWatch = useLocation();

  let locPathWatchLater = locationIsWatch.pathname === "/watch-later";
  let locPathFavourite = locationIsWatch.pathname === "/favourites";

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  const handleWatchLater = () => {
    setWatchLater((previousStar) => {
      return !previousStar;
    });
  };

  return (
    <div className="movie-container">
      <div className="main-movie-text">
        <span className="movie-name-prefix">Movie Title:</span>
        <span className="highlight">{props.movies.title}</span>
        <div className="movie-name">
          <span className="movie-name-prefix">Description:</span>
          <span className="specialities">{props.movies.overview}</span>
        </div>
        <div className="movies-extra-details">
          <div>
            Original Language:{" "}
            <span>{props.movies.original_language.toUpperCase()}</span>
          </div>
          <div>
            Vote Count: <span>{props.movies.vote_count}</span>
          </div>
          <div>
            Release Date: <span>{props.movies.release_date}</span>
          </div>
        </div>
        <div className="movies-icons">
          {locPathWatchLater || locPathFavourite ? null : (
            <FavouriteMovie
              active={active}
              movie={props.movies}
              handleChangeActive={handleChangeActive}
              addFavouriteMovie={() =>
                props.handleFavouritesClick(props.movies)
              }
              removeFavouriteMovie={() =>
                props.removeFavouriteMovie(props.movies)
              }
            />
          )}
          {locPathFavourite ? null : (
            <WatchLater
              id={props.movies.id}
              watchLater={watchLater}
              locationIsWatch={props.locationIsWatch}
              handlewatchLater={handleWatchLater}
              removeWatchLaterMovie={() =>
                props.removeWatchLaterMovie(props.movies)
              }
              addWatchLaterMovie={() => props.addWatchLaterMovie(props.movies)}
            />
          )}
        </div>
      </div>

      <img
        className="movie-main-image"
        alt="Movie_Image"
        src={`${getImage + props.movies.poster_path}`}
      />
    </div>
  );
};

export default Movies;

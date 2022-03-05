import { useState } from "react";
import "../css/Movies.css";
import { getImage } from "../API/ImagePath";
import FavouriteMovie from "./FavouriteMovie";
import WatchLater from "./WatchLater";

const Movies = ({
  movies: {
    overview,
    original_language,
    title,
    vote_count,
    release_date,
    poster_path,
    id,
  },
}) => {
  const [active, setActive] = useState(false);
  const [watchLater, setWatchLater] = useState(false);

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
        <span className="highlight">{title}</span>
        <div className="movie-name">
          <span className="movie-name-prefix">Description:</span>
          <span className="specialities">{overview}</span>
        </div>
        <div className="movies-extra-details">
          <div>
            Original Language: <span>{original_language.toUpperCase()}</span>
          </div>
          <div>
            Vote Count: <span>{vote_count}</span>
          </div>
          <div>
            Release Date: <span>{release_date}</span>
          </div>
        </div>
        <div className="movies-icons">
          <FavouriteMovie
            active={active}
            id={id}
            handleChangeActive={handleChangeActive}
          />
          <WatchLater
            watchLater={watchLater}
            handlewatchLater={handleWatchLater}
          />
        </div>
      </div>

      <img
        className="movie-main-image"
        alt="Movie_Image"
        src={`${getImage + poster_path}`}
      />
    </div>
  );
};

export default Movies;

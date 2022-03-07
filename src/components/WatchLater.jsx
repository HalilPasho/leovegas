import React, { useState } from "react";
import "../css/WatchLater.css";

import WatchLaterIcon from "../images/watch-later.png";
import Popup from "./Popup";

const WatchLater = ({
  watchLater,
  handlewatchLater,
  addWatchLaterMovie,
  removeWatchLaterMovie,
  locationIsWatch,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  let islocationIsWatchL = "";
  if (locationIsWatch && locationIsWatch.pathname === "/watch-later") {
    islocationIsWatchL = locationIsWatch;
  }

  const removefromList = () => {
    return <div>You saved this!</div>;
  };

  return (
    <div className="movies-watch-later">
      {islocationIsWatchL ? (
        removefromList()
      ) : watchLater || islocationIsWatchL ? (
        <div
          className="movies-toggle-watch"
          onClick={() => {
            handlewatchLater();
            removeWatchLaterMovie();
          }}
        >
          <img src={WatchLaterIcon} alt="watch-later" />
          <div>Saved to watch later</div>
        </div>
      ) : (
        <div
          className="movies-toggle-watch"
          onClick={() => {
            togglePopup();
            addWatchLaterMovie();
            handlewatchLater();
          }}
        >
          <img src={WatchLaterIcon} alt="watch-later" />
          <div>Watch Later</div>
        </div>
      )}

      {isOpen && (
        <Popup
          content={
            <>
              <div>Saved to watch later !</div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default WatchLater;

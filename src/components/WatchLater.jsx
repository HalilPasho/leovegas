import React, { useState } from "react";
import "../css/WatchLater.css";
import WatchLaterIcon from "../images/watch-later.png";
import Popup from "./Popup";

const WatchLater = ({ watchLater, handlewatchLater }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="movies-watch-later">
      {watchLater ? (
        <div className="movies-toggle-watch" onClick={() => handlewatchLater()}>
          <img src={WatchLaterIcon} alt="watch-later" />
          <div>Saved to watch later</div>
        </div>
      ) : (
        <div
          className="movies-toggle-watch"
          onClick={() => {
            togglePopup();
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

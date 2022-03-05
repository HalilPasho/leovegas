import React from "react";
import "../css/Popup.css";

const Popup = ({ handleClose, content }) => {
  setTimeout(() => {
    handleClose();
  }, 1000);

  return (
    <div className="popup-box" onClick={handleClose}>
      <div className="box">{content}</div>
    </div>
  );
};

export default Popup;

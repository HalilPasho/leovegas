import React from "react";
import "../css/Popup.css";

const Popup = (props) => {
  setTimeout(() => {
    props.handleClose();
  }, 1000);

  return (
    <div className="popup-box" onClick={props.handleClose}>
      <div className="box">{props.content}</div>
    </div>
  );
};

export default Popup;

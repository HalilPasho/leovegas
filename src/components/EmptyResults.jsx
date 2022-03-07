import React from "react";
import "../css/EmptyResults.css";

const EmptyResults = ({ text }) => {
  return <div className="movie-list-empty">{text}</div>;
};

export default EmptyResults;

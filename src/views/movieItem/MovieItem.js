import React from "react";
import "./style.css";
//import { render } from "react-dom";

function MovieItem(props) {
  return (
    <div className="movieBlock">
      <img src={props.img} alt={props.title} className="movieImg" />
      <div className="movieText">{props.title}</div>
    </div>
  );
}

export default MovieItem;

import React from "react";
import "./style.css";
//import { render } from "react-dom";

function MovieItem(props) {
  //var src = require(props.img);
  //var src = require("../../../../public/resources/movie5.jpg");

  return (
    <div className="movieBlock">
      <img src={props.resource} alt={props.title} className="movieImg" />
      <div className="movieText">{props.title}</div>
    </div>
  );
}

// <img src={props.img} alt={props.title} className="movieImg" />

export default MovieItem;

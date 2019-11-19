import React from "react";
import { render } from "react-dom";

import Header from "./views/header/Header";
import MovieItem from "./views/movieItem/MovieItem";

// get resources, so they are available when we need them:
import movie1 from "../public/resources/movie1.jpg";
import movie2 from "../public/resources/movie2.jpg";
import movie3 from "../public/resources/movie3.jpg";
import movie4 from "../public/resources/movie4.jpg";
import movie5 from "../public/resources/movie5.jpg";

const App = () => (
  <div>
    <Header />
    <MovieItem
      title="Ice Age"
      img="../../../../public/resources/movie1.jpg"
      img_="https://images-na.ssl-images-amazon.com/images/I/51A3PXFRV6L._SY445_.jpg"
    />
    <MovieItem
      title="Ice Age 2"
      img="../../../../public/resources/movie2.jpg"
      img_="https://images-na.ssl-images-amazon.com/images/I/51zPYE7eZTL._SY445_.jpg"
    />
    <MovieItem
      title="Ice Age 3"
      img="../../../../public/resources/movie3.jpg"
      img_="https://nammi.is/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/i/c/ice_age_3_6.jpg"
    />
    <MovieItem
      title="Ice Age 4"
      img="../../../../public/resources/movie4.jpg"
      img_="https://images-na.ssl-images-amazon.com/images/I/71hLvTZg89L._SL1500_.jpg"
    />
    <MovieItem
      title="Ice Age 5"
      img="../../../../public/resources/movie5.jpg"
      img_="https://images-na.ssl-images-amazon.com/images/I/61lm2MHMS7L._SY445_.jpg"
    />
  </div>
);

render(<App />, document.getElementById("root"));

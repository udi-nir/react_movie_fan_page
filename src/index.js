import React from "react";
import { render } from "react-dom";

import Header from "./views/header/Header";
import MovieItem from "./views/movieItem/MovieItem";

const App = () => (
  <div>
    <Header />
    <MovieItem
      title="Ice Age"
      img="https://images-na.ssl-images-amazon.com/images/I/51A3PXFRV6L._SY445_.jpg"
    />
    <MovieItem
      title="Ice Age 2"
      img="https://images-na.ssl-images-amazon.com/images/I/51zPYE7eZTL._SY445_.jpg"
    />
    <MovieItem
      title="Ice Age 3"
      img="https://nammi.is/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/i/c/ice_age_3_6.jpg"
    />
    <MovieItem
      title="Ice Age 4"
      img="https://images-na.ssl-images-amazon.com/images/I/71hLvTZg89L._SL1500_.jpg"
    />
    <MovieItem
      title="Ice Age 5"
      img="https://images-na.ssl-images-amazon.com/images/I/61lm2MHMS7L._SY445_.jpg"
    />
  </div>
);

render(<App />, document.getElementById("root"));

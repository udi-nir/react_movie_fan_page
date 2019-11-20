import React from "react";
import "./style.css";

import Header from "../header/Header";
import MovieItem from "../movieItem/MovieItem";

// get resources, so they are available when we need them:
import movie1 from "../../../public/resources/movie1.jpg";
import movie2 from "../../../public/resources/movie2.jpg";
import movie3 from "../../../public/resources/movie3.jpg";
import movie4 from "../../../public/resources/movie4.jpg";
import movie5 from "../../../public/resources/movie5.jpg";

function App(props) {
  return (
    <div>
      <Header />
      <div className="content">
        <MovieItem
          title="Ice Age"
          img="../../../../public/resources/movie1.jpg"
          resource={movie1}
          img_="https://images-na.ssl-images-amazon.com/images/I/51A3PXFRV6L._SY445_.jpg"
        />
        <MovieItem
          title="The Meltdown"
          img="../../../../public/resources/movie2.jpg"
          resource={movie2}
          img_="https://images-na.ssl-images-amazon.com/images/I/51zPYE7eZTL._SY445_.jpg"
        />
        <MovieItem
          title="Dawn of the Dinosaurs"
          img="../../../../public/resources/movie3.jpg"
          resource={movie3}
          img_="https://nammi.is/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/i/c/ice_age_3_6.jpg"
        />
        <MovieItem
          title="Continental Drift"
          img="../../../../public/resources/movie4.jpg"
          resource={movie4}
          img_="https://images-na.ssl-images-amazon.com/images/I/71hLvTZg89L._SL1500_.jpg"
        />
        <MovieItem
          title="Collision Course"
          img="../../../../public/resources/movie5.jpg"
          resource={movie5}
          img_="https://images-na.ssl-images-amazon.com/images/I/61lm2MHMS7L._SY445_.jpg"
        />
      </div>
    </div>
  );
}

export default App;

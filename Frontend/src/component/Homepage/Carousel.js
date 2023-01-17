import React from "react";
import CardOne from "./Card/CardOne";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div>
      <div className="carousel_main"></div>
      <div className="card_flex">
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
      </div>
    </div>
  );
};

export default Carousel;

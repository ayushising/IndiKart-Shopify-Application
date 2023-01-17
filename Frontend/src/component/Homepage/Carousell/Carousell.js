import React, { useState, useEffect } from "react";
import "./Carousell.css";
import { images } from "../Helpers/CarouselData";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const [countInTimeout, setCountInTimeout] = useState(0);
  const [count, setCount] = useState(0);
  const [mousedOver, setMousedOver] = useState(false);

  useEffect(() => {
    // set an interval timer if we are currently moused over

    const timer = setInterval(() => {
      // cycle prevCount using mod instead of checking for hard-coded length
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 2000);
    // automatically clear timer the next time this effect is fired or
    // the component is unmounted
    return () => clearInterval(timer);
    // } else {
    //   // otherwise (not moused over), reset the counter
    //   setCount(0);
    // }
    // the dependency on mousedOver means that this effect is fired
    // every time mousedOver changes
  }, []);

  console.log(currImg);
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[count].img})` }}
      >
        <div
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        ></div>

        <div
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        ></div>
      </div>
    </div>
  );
}

export default Carousel;

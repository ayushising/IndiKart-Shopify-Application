import React from "react";
import "./Card.css";
const CardOne = () => {
  return (
    <div className="container">
      <div className="AdvertisementOne__header">
        Upto 60% off on Electronics
      </div>
      <div className="AdvertisementOne__body">
        <img
          src="https://ik.imagekit.io/amazon1234/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204__nBkAcb2wW.jpg?updatedAt=1627731880089"
          alt=""
          style={{ width: "299px" }}
        />
      </div>
      <div className="AdvertisementOne__footer">See more</div>
    </div>
  );
};

export default CardOne;

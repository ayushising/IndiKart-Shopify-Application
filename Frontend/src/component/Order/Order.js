import React from "react";

import { useState } from "react";
import "./Order.css";
const Order = ({ id, image, name, newPrice, discription }) => {
  const [order, setOrder] = useState([]);

  return (
    <div className="outer">
      <div className="">
        <div className="cart-product" key={id}>
          <img
            style={{ height: "200px", width: "200px", objectFit: "contain" }}
            src={image}
            alt={name}
            height={200}
            width={200}
            objectFit="contain"
          />
          <div className="product-info">
            <h2>{name}</h2>
            <span className=".des ">{discription}</span>
            {/* <div className="star"> */}
            {/* <ReactStars
          count={4}
          size={20}
          color="#ffd700"
          //   activeColor="#ffd700"
        /> */}
            {/* <h1>*****</h1>
        </div> */}
            <span className="product-price ">
              <h3 style={{ fontSize: "28px" }}>₹{newPrice}.00</h3>
            </span>
          </div>
          <div>
            <button className=" mt-auto add-to-cart button">Track Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

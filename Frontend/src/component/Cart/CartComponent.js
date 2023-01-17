import React from "react";
import "../Cart/Cart.css";
// import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../slices/basketSlice";

const CartComponent = ({ id, image, name, newPrice, discription }) => {
  const dispatch = useDispatch();

  const removeItemBasket = () => {
    console.log(id);
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="cart-product" key={id}>
      <img
        style={{ maxHeight: "200px", width: "200px" }}
        src={image}
        alt={name}
        height={200}
        width={200}
        objectFit="contain"
      />
      <div className="product-info">
        <span style={{ fontSize: "30px" }}>{name}</span>
        <span style={{ fontSize: "20px" }} className="">
          {discription}
        </span>
        {/* <div className="star"> */}
        {/* <ReactStars
          count={4}
          size={20}
          color="#ffd700"
          //   activeColor="#ffd700"
        /> */}
        {/* <h1>*****</h1>
        </div> */}
        <span className="product-price " style={{}}>
          <span>₹{newPrice}.00</span>
        </span>
      </div>
      <div>
        <button className=" button" onClick={removeItemBasket}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartComponent;

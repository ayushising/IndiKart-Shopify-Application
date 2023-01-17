import axios from "axios";
import React from "react";

import "./Product.css";
import { useDispatch } from "react-redux";

import { addToBasket } from "../../slices/basketSlice";
const Product = ({
  userId,
  id,
  image,
  name,
  oldPrice,
  newPrice,
  discription,
}) => {
  const dispatch = useDispatch();
  // const handleCart = (id) => {
  //   axios
  //     .post("http://localhost:8081/shopify/cart/add", {
  //       userId: "639c9a1e5e4b72520618b2d4",
  //       productId: id,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       // setData(response.data);
  //       // setUseId(response.data.id);
  //     });
  //   console.log(id);
  // };

  const handleClick = (id) => {
    const product = { id, image, name, newPrice, discription };
    dispatch(addToBasket(product));
    axios
      .post("http://localhost:8081/shopify/cart/add", {
        userId: userId,
        productId: id,
      })
      .then((response) => {
        console.log(response.data);
        // setData(response.data);
        // setUseId(response.data.id);
      });
    // console.log(product.productId);
    // console.log(product);
  };

  const addItemToBasket = () => {
    //sending product to redux store
    const product = { id, image, name, newPrice, discription };
    dispatch(addToBasket(product));
  };

  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="product-name">{name}</div>
      <div className="discprition">{discription}</div>
      <div className="price">
        <div className="star">
          {/* <ReactStars
            count={2}
            size={14}
            color="#ffd700"
            //   activeColor="#ffd700"
          /> */}
          <span style={{ heigh: "110px", fontSize: "40px" }}>*****</span>
        </div>
        {/* <h5 className="old">10000/-</h5> */}
        <span style={{ heigh: "110px", fontSize: "27px", fontWeight: 600 }}>
          ₹{newPrice}/-
        </span>
      </div>
      <button
        onClick={(event) => handleClick(id)}
        // onClick={addItemToBasket}
        // onClick={(event) => {
        //   handleCart({ id });
        // }}
        // onClick={() => {
        //   dispatch({ type: "UPDATE_CART_COUNT" });
        // }}
        className="add-to-cart"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Product;

import React from "react";
import CartComponent from "../Cart/CartComponent";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import { selectTotal } from "../../slices/basketSlice";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);

const Cart = () => {
  const navigate = useNavigate();
  const items = useSelector(selectItems);
  const totals = useSelector(selectTotal);
  console.log(totals);
  console.log(items);

  let totalss = 0;

  // const createCheckOutSession = async() => {
  //   const stripe = await stripePromise;
  // };
  const createCheckOutSession = () => {
    navigate("/pay");
  };

  return (
    <div className=" bg-gray-100">
      <Navbar />

      <div className=" flex flex-row">
        <div className="" style={{ marginLeft: "80px", marginRight: "220px" }}>
          <h1 className=" ml-20 carthead" style={{ marginLeft: "20px" }}>
            {items.length === 0 ? (
              <span>Cart is Empty</span>
            ) : (
              <span>Shopping Cart</span>
            )}

            <hr className="hrCart" />
          </h1>
          <div className=" ml-14">
            {items.map((pro, i) => {
              return (
                <CartComponent
                  id={pro.id}
                  image={pro.image}
                  name={pro.name}
                  discription={pro.discription}
                  newPrice={pro.newPrice}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{
            marginLeft: "80px",
            marginRight: "220px",
            display: "flex",
            justifyContent: "space-between",
            borderColor: "gray",
          }}
          className="cart-summary"
        >
          <span
            className=" text-neutral-700 "
            style={{
              color: "Black",
              marginLeft: "110px",
              marginTop: "29px",
              fontSize: "20px",
            }}
          >
            Summary:{" "}
            <hr
              className="hrCart"
              style={{ marginLeft: "1px", marginRight: "20px", width: "100px" }}
            />
          </span>

          <div
            style={{
              marginRight: "8 0px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="summaryText">SubItems: {items.length}</span>
            <span className="summaryText">CGST: 0%</span>
            <span className="summaryText">Deilvery fee:Free</span>
            {items.map((i, k) => {
              totalss += i.newPrice;
            })}
            <span className="summaryText">Total: ${totalss}</span>
          </div>
          <button
            onClick={createCheckOutSession}
            className="button"
            style={{
              marginRight: "50px",
              marginTop: "35px",
              marginBottom: "29px",
            }}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

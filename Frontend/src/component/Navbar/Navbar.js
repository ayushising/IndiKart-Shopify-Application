import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import hal from "../Homepage/Images/hal.jpg";
const Navbar = () => {
  const items = useSelector(selectItems);

  return (
    <div>
      <div>
        <div className="navbar__component">
          <div className="navbar__logo" style={{ cursor: "pointer" }}>
            {/* <Link to={"/home"} className="linknav">
              ShopifyMe
            </Link> */}
            <Link to="/home">
              <img
                src={hal}
                style={{ height: "42px", width: "180px" }}
                alt="hal"
              />
            </Link>
          </div>
          <div className="navbar__searchcomponent " style={{ display: "flex" }}>
            <input
              type="text"
              className="navbar__searchbox navbar_text"
              placeholder="Search for Product brand etc"
            />
            <button className="navbar__searchicon searchButton"></button>
          </div>
          <div className="right">
            <div className="profile">
              {/* <Person2Outlined /> */}
              {/* <img
                src={profile}
                style={{
                  height: "25px",
                  width: "40px",
                  color: "black",
                  marginLeft: "10px",
                }}
                alt="profile"
              /> */}
              <span>Profile</span>
            </div>

            <div className="profile">
              {/* <span>Logout</span> */}
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="linknav"
              >
                Logout
              </Link>
            </div>

            <div className="navbar_text navbar__cart  mt-12">
              <div src="" className="cart__image"></div>
              <div className="cart__item"> {items.length} </div>
              {/* <div className="navbar_text_cart">Cart</div> */}
              <Link to="/cart" className="linknav">
                Cart
              </Link>
            </div>

            <div className="profile">
              {/* <Link to="/order">My Orders</Link> */}
              <span>My Orders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

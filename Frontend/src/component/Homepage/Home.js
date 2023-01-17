import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import CartComponent from "../Cart/CartComponent";
import Carousell from "../Homepage/Carousell/Carousell";
import Order from "../Order/Order";
import Footer1 from "../Footer/Footer1";
import profile from "./Images/profile.svg";
import hal from "../Homepage/Images/hal.jpg";

// import Person2Outlined from "@mui/icons-material";
const Home = (props) => {
  const [product, setProduct] = useState([]);
  const items = useSelector(selectItems);
  const navigate = useNavigate();
  const [home, setHome] = useState(true);
  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState("");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    axios
      .get(`http://localhost:8082/shopify/products/searchBrand/${search}`)

      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8082/shopify/products/getAllProducts")

      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      });
    if (props.userName !== "") {
      axios
        .post(
          "http://localhost:9091/shopify/user/save",

          {
            name: props.userName,
            email: props.email,
          }
        )
        .then((response) => {
          console.log(response.data);
          setUserId(response.data.id);
        });
    }
    console.log(userId);

    axios
      .get(`http://localhost:9091/shopify/user/getId/${userId}`, {
        mode: "no-cors", // 'cors' by default
      })
      .then((response) => {
        console.log("this get from id", response.data);
        // setData(response.data);
      });

    // axios
    //   .post("http://localhost:8081/shopify/cart/add", {
    //     userId: "639fbf97a82bc24a6dd6b8b9",
    //     productId: id,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //     // setData(response.data);
    //     // setUseId(response.data.id);
    //   });

    // axios
    //   .get("http://localhost:8081/shopify/cart/show/639fbf97a82bc24a6dd6b8b9")
    //   .then((response) => {
    //     console.log(response.data.list);
    //     // setProduct(response.data);
    //   });
  }, []);
  const handleClick = (productID) => {
    axios
      .post("http://localhost:8081/shopify/cart/add", {
        userId: userId,
        productId: productID,
      })
      .then((response) => {
        console.log(response.data);
        // setData(response.data);
        // setUseId(response.data.id);
      });
    console.log(product.productId);
    console.log(product);
  };

  const getCart = async () => {
    const response = await axios.get(
      `http://localhost:8081/shopify/cart/show/${userId}`
    );
    setCart(response.data);
    setHome(false);
  };
  console.log(cart);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);

  return (
    <div>
      {/*--NAVBARRRR-----*/}
      <div>
        <div className="navbar__component">
          <div className="navbar__logo" style={{ cursor: "pointer" }}>
            {/* <span
              onClick={() => {
                setHome(true);
              }}
            >
              {" "}
              ShopifyMe
            </span> */}
            <Link to="/home">
              <img
                onClick={() => {
                  setHome(true);
                }}
                src={hal}
                style={{ height: "42px", width: "180px" }}
                alt="hal"
              />
            </Link>
          </div>
          <div className="navbar__searchcomponent " style={{ display: "flex" }}>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              type="text"
              className="navbar__searchbox navbar_text"
              placeholder="Search for Product brand etc"
            />
            <button
              className="navbar__searchicon searchButton"
              onClick={handleSearch}
            ></button>
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
              <span onClick={() => getCart()}>My Orders</span>
            </div>
          </div>
        </div>
      </div>

      {/*---ENDD----*/}
      {home ? (
        <div>
          <Carousell />
          <Carousel />
          <span className="ordertrend">Trending Electronics</span>
          <hr className="hrtrend"></hr>

          <div className="pro">
            {product.map((product) => {
              return (
                <div className="pro_flex">
                  <Product
                    userId={userId}
                    id={product.productID}
                    image={product.pImageURL}
                    name={product.pName}
                    newPrice={product.pPrice}
                    discription={product.pDescription}
                  />
                  {/* <button onClick={(event) => handleClick(product.productID)}>
                    add{" "}
                  </button> */}
                </div>
              );
            })}
          </div>
          <div>
            <button onClick={() => getCart()}>Cartt</button>
          </div>
          <Footer1 />
        </div>
      ) : (
        <div>
          <div className="orderhead">
            <img
              style={{ height: "400px", width: "100vw" }}
              src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000"
              alt="image"
            />
            <span>Your Orders</span>
            <hr className="hrOrder" />
          </div>

          <div className=" outer ">
            {cart.list.map((pro, i) => {
              return (
                <Order
                  id={pro.productID}
                  image={pro.pImageURL}
                  name={pro.pName}
                  discription={pro.pDescription}
                  newPrice={pro.pPrice}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

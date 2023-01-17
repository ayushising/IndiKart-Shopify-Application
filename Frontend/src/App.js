import "./App.css";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Home from "./component/Homepage/Home";
import axios from "axios";
import Cart from "./component/Homepage/Cart";
import Payment from "./pages/Payment";
import Completion from "./pages/Completion";
import Order from "./component/Order/Order";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [carts, setCarts] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUserName(user.displayName);
        setEmail(user.email);
      } else setUserName("");
    });

    // axios
    //   .get("http://localhost:8081/shopify/cart/show/639c9a1e5e4b72520618b2d4")
    //   .then((response) => {
    //     console.log(response.data);
    //     setCarts(response.data);
    //     // setProduct(response.data);
    //   });

    // axios
    //   .get(`http://localhost:9091/shopify/user/getId/${userId}`, {
    //     mode: "no-cors", // 'cors' by default
    //   })
    //   .then((response) => {
    //     console.log("this get from id", response.data);
    //     // setData(response.data);
    //   });

    // if (userName !== "") {
    //   axios
    //     .post(
    //       "http://localhost:9091/shopify/user/save",

    //       {
    //         name: userName,
    //         email: email,
    //       }
    //     )
    //     .then((response) => {
    //       console.log(response.data);
    //       setUserId(response.data.id);
    //     });
    // }
  }, []);
  console.log(userName);
  console.log(carts);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={<Home userName={userName} email={email} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

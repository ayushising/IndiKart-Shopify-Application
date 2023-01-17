import Navbar from "../component/Navbar/Navbar";
import Carousell from "../component/Homepage/Carousell/Carousell";
import { useNavigate } from "react-router-dom";
function Completion(props) {
  const navigate = useNavigate();
  const goback = () => {
    navigate("/home");
  };

  return (
    <div>
      <Navbar />
      {/* <h5 style={{ marginTop: "120px", marginLeft: "420px", fontSize: "40px" }}>

        Thanks for Shooping With Us
      </h5>
      <hr></hr> */}

      <Carousell />
      <div className="orderCom">
        {/* <img
          style={{ height: "400px", width: "100vw" }}
          src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?w=2000"
          alt="image"
        /> */}
        <span>Happy Shooping🎉 </span>
        <hr className="hrCom" />
        <button className="browse" onClick={goback}>
          {" "}
          Browse more exciting offers!!
        </button>
      </div>
    </div>
  );
}

export default Completion;

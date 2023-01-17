import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import hal from "../Homepage/Images/hal.jpg";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div>
      <div className={styles.container}>
        <div>
          <div
            style={{ display: "flex", marginLeft: "450px", marginTop: "60px" }}
          >
            <h4
              style={{
                fontFamily: "cursive",

                fontSize: "40px",
              }}
            >
              Weclome to{" "}
            </h4>
            <img
              src={hal}
              style={{
                height: "52px",
                width: "180px",
                // marginTop: "10px",
                // marginBottom: "870px",
              }}
              alt="hal"
            />
          </div>
          <div style={{ display: "flex" }}></div>
          <img
            style={{
              height: "800px",
              width: "600px",
              marginRight: "50px",
              backgroundColor: "#f1f6f6;",
            }}
            src="https://preview.colorlib.com/theme/bootstrap/login-form-08/images/undraw_file_sync_ot38.svg"
            alt="img"
          />
        </div>
        <div className={styles.innerBox}>
          <span
            className={styles.heading}
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontFamily: "inherit",
            }}
          >
            Login
          </span>

          <InputControl
            label="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="Enter email address"
          />
          <InputControl
            label="Password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            placeholder="Enter Password"
          />

          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              Login
            </button>
            <p style={{ fontSize: "20px" }}>
              New User?{" "}
              <span>
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

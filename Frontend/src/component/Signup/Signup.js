import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import hal from "../Homepage/Images/hal.jpg";
// import styles from "./Login.module.css";
import styles from "../Login/Login.module.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
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
        <h1
          className={styles.heading}
          style={{
            fontSize: "40px",
            textAlign: "center",
            fontFamily: "inherit",
          }}
        >
          Signup
        </h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </button>
          <p style={{ fontSize: "20px" }}>
            Already have an account?{" "}
            <span>
              <Link to="/">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

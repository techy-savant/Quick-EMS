import React, { useState } from "react";
import Swal from "sweetalert2";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

const Register = ({ setIsAuthenticated }) => {
  const [userMail, setUserMail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!userMail || !firstPassword || !secondPassword) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    if (firstPassword != secondPassword) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Both Password Fields must match each other.",
        showConfirmButton: true,
      });
    }

    const auth = getAuth();

    if (document.activeElement.name === "Register") {
      try {
        await createUserWithEmailAndPassword(auth, userMail, firstPassword);
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);

            Swal.fire({
              icon: "success",
              title: "Successfully registered and logged in!",
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="small-container">
      <h1 className="logo" style={{ marginBottom: "30px" }}>
        Quick-EMS
      </h1>
      <form onSubmit={handleRegister}>
        <h3>Register Admin</h3>
        <label htmlFor="userMail">User Email</label>
        <input
          id="userMail"
          type="email"
          name="userMail"
          value={userMail}
          onChange={(e) => setUserMail(e.target.value)}
        />
        <label htmlFor="firstPassword">Enter Password</label>
        <input
          id="firstPassword"
          type="password"
          name="firstPassword"
          value={firstPassword}
          onChange={(e) => setFirstPassword(e.target.value)}
        />
        <label htmlFor="secondPassword">Confirm Password</label>
        <input
          id="secondPassword"
          type="password"
          name="secondPassword"
          value={secondPassword}
          onChange={(e) => setSecondPassword(e.target.value)}
        />

       
        <input
          style={{ marginTop: "12px", backgroundColor: "black" }}
          type="button"
          value="« Back To SignIn"
          name="SignIn"
          onClick={() => {
            navigate("/");
          }}
        />
        <input
          style={{ marginTop: "12px", marginLeft: "12px" }}
          type="submit"
          value="Register"
          name="Register"
        />
      </form>
    </div>
  );
};

export default Register;

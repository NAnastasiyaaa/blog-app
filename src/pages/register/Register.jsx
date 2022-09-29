import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FaUserPlus } from "react-icons/fa";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">
        Sign Up
      </span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          className="registerInput"
          placeholder="Enter your name.."
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <label htmlFor="">Email</label>
        <input
          className="registerInput"
          placeholder="Enter your email.."
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="">Password</label>
        <input
          className="registerInput"
          placeholder="Enter your password.."
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="registerButton" type="submit">
        Sign Up
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Log In
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          {" "}
          Something went wrong...
        </span>
      )}
    </div>
  );
}

export default Register;

import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from 'axios';
import { FaUser } from 'react-icons/fa';



function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username:userRef.current.value,
        password:passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload:res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE"});
    }
  };

  console.log(isFetching)

  return (
    <div className="login">
      <span className="loginTitle">Log In <FaUser /></span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input
          className="loginInput"
          placeholder="Enter your name.."
          ref={userRef}
        ></input>
        <label htmlFor="">Password</label>
        <input
          className="loginInput"
          placeholder="Enter your password.."
          type="password"
          ref={passwordRef}
        ></input>
        <button className="loginButton" type="submit" disabled={isFetching}>
          LOG IN
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Sign Up
        </Link>
      </button>
    </div>
  );
}

export default Login;

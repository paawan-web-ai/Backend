import React from "react";
import "../style/login.scss";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router";
const Login = () => {
  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <FormGroup label="Email" placeholder={"Enter Email"} />
          <FormGroup label={"Password"} placeholder={"Enter Password"} />
          <button className="button" type="submit">
            Login
          </button>
          <p>
            Don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;

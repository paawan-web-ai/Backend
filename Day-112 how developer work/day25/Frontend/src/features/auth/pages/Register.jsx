import React from "react";
import "../style/register.scss";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router";

const Register = () => {
  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <FormGroup label={"Username"} placeholder={"Enter Username"} />
          <FormGroup label={"Email"} placeholder={"Enter Email"} />
          <FormGroup label={"Password"} placeholder={"Enter Password"} />
          <button className="button" type="submit">
            Login
          </button>
          <p>
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Register;

import React, { useState } from "react";
import "../style/register.scss";
import FormGroup from "../components/FormGroup";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const { loading, handleRegister } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    await handleRegister({ username, email, password });
    navigate("/");
  }

  return (
    <main className="register-page">
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup
            value={username}
            onChange={(e) => setusername(e.target.value)}
            label={"Username"}
            placeholder={"Enter Username"}
          />
          <FormGroup
            value={email}
            onChange={(e) => setemail(e.target.value)}
            label={"Email"}
            placeholder={"Enter Email"}
          />
          <FormGroup
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            label={"Password"}
            placeholder={"Enter Password"}
          />
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

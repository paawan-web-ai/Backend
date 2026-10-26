import React, { useState } from "react";
import "../style/login.scss";
import FormGroup from "../components/FormGroup";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
  const { loading, handleLogin } = useAuth();

  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/");
  }

  return (
    <main className="login-page">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup
            value={email}
            onChange={(e) => setemail(e.target.value)}
            label="Email"
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
            Don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;

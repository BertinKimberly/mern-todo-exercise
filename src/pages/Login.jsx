import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const api_base = "http://localhost:3001/user";
  const loginUser = async () => {
    try {
      const response = await axios.post(`${api_base}/login`, {
        email: email,
        password: password,
      });
      console.log(response.data);
      if (response) {
        navigate("/todo");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };
  return (
    <div className="main">
      <div className="container d-flex flex-column w-100 h-100 justify-content-center">
        <h1>Login page</h1>
        <form onSubmit={handleSubmit} className=" h-50 d-flex justify-content-between flex-column pt-4 pb-4">
          <div>
       
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="m-2 btn btn-outline-dark">Login</button>
        </form>

        <h2>Register</h2>
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
};

export default Login;

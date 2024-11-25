import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow" style={{ width: "25rem" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <p className="text-center mt-3">
            <small>
              Don't have an account? <Link to={"/Register"}>Register</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

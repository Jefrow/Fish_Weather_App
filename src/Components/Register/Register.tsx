import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow" style={{ width: "25rem" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Sign Up</h3>
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
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="verifyPassword" className="form-label">
                  Verify Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Verify your password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </form>
            <p className="text-center mt-3">
              <small>
                Already have an account? <Link to="/">Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

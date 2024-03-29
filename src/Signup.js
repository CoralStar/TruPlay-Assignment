import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="loginstyle bodyColor signup template d-flex vh-100">
      <div className="form_container p-5 text-white">
        <form>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>

          <div className="d-grid mt-2">
            <Link to="/">
              <button className="btn-color rounded">Sign Up</button>
            </Link>
          </div>
          <p className="text-end mt-2">
            Already Registered? <a href="/">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

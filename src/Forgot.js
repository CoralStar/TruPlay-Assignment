import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <div className="loginstyle bodyColor login template d-flex vh-100">
      <div className="form_container p-5 rounded text-white">
        <form>
          <h3 className="text-center">Forgot Password</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="d-grid mt-2">
            <a href="/">
              <Link to="/">
                <button className="btn-color rounded">Send</button>
              </Link>
            </a>
          </div>
          <p className="text-end mt-2">
            <a href="/">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Forgot;

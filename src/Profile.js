//import React from "react";
import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import "./Login";

export default function Profile() {
  const storedItems = JSON.parse(localStorage.getItem("items"));
  const [items] = useState(storedItems);

  const [disabled, setDisabled] = useState(true);

  function handleClick() {
    setDisabled(!disabled);
  }

  return (
    <div className="loginstyle bodyColor login template d-flex vh-90">
      <div className="form_container p-5 rounded text-white">
        <form>
          <h2 className="text-center">Settings</h2>
          <br></br>
          <h3>Account</h3>
          <br></br>
          <h5>Email Address</h5>
          <div className="w-100 mb-2">
            <input
              className="typing-container"
              type="module"
              placeholder={items}
              disabled={disabled}
            />
            <br></br>
          </div>
          <h5>Password</h5>
          <div className="w-100 mb-2">
            <input
              className="typing-container"
              type="password"
              placeholder=" Password "
              disabled={disabled}
            />
          </div>
          <br></br>
          <input
            type="checkbox"
            className="custom-control custom-checkbox"
            id="check"
          />
          <label htmlFor="check" className="custom-input-label ms-2">
            Send me Newsletters and Promotions
          </label>

          <br></br>
          <br></br>
          <div className="text-center">
            <button
              type="button"
              className="btn-color rounded"
              onClick={handleClick}
            >
              Change
            </button>
            <div className="span"></div>
          </div>

          <div className="mb-2">
            <h3>Subscriptions</h3>
            <br></br>
            <h5>Current Plan</h5>
            <div className="d-table w-100 mb-2">
              <p className="d-table-cell w-100">Annual</p>
              <div className="d-table-cell">
                <a href="#" className="linkColor">
                  Manage_>
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <div className="span"></div>
          <br></br>
          <div className="text-center">
            <Link to="/">
              <button className="btn-color rounded">Log Out</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

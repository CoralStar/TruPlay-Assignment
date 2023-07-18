import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";
import "./UserInput";

function Login() {
  const [disabled, setDisabled] = useState(true);
  function handleClick() {
    setDisabled(!disabled);
  }

  const [items, setItems] = useState([]);
  const [itemspassword, setitemspassword] = useState([]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
    const storedItems = JSON.parse(localStorage.getItem("items"));
    localStorage.setItem("itemspassword", JSON.stringify(itemspassword));
    const storedItemsPassword = JSON.parse(
      localStorage.getItem("itemspassword")
    );

    console.log(storedItems);
    console.log(storedItemsPassword);
  });

  return (
    <div className="loginstyle bodyColor login template d-flex vh-100">
      <div className="form_container p-5 rounded text-white">
        <form>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              disabled={!items || !setItems ? true : false}
              onClick={handleClick}
              items={items}
              setItems={setItems}
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              disabled={!itemspassword || !setitemspassword ? true : false}
              itempassword={itemspassword}
              setItems={setitemspassword}
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember Me
            </label>
          </div>
          <Link to="/profile">
            <button className="btn-color rounded" disabled={disabled}>
              Sign In
            </button>
          </Link>
          <p className="text-end mt-2">
            <a href="/forgot">Forgot Password?</a>
            <a href="/signup" className="ms-2">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

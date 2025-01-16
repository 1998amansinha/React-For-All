import { useState } from "react";
import { LOGO } from "../constants/url";
import { Link } from "react-router";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  return (
    <div id="header">
      <div className="logo">
        <img src={LOGO} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>Orders</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnLogin === "Login"
                ? setBtnLogin("Logout")
                : setBtnLogin("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

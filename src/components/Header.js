import { useState } from "react";
import { LOGO } from "../constants/url";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  return (
    <div id="header">
      <div className="logo">
        <img src={LOGO} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Store</li>
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

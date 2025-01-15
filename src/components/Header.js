import { LOGO } from "../constants/url";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;

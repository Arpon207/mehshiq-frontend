import "./navbar.css";
import { NavLink } from "react-router-dom";
import login_icon from "../../assets/icons/login-.png";
import cart_icon from "../../assets/icons/shopping-bag.png";
import search_icon from "../../assets/icons/search.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/collections"}>Collections</NavLink>
        <NavLink to={"/men"}>Men</NavLink>
        <NavLink to={"/women"}>Women</NavLink>
        <NavLink to={"/women"}>About Us</NavLink>
        <NavLink to={"/women"}>Contact Us</NavLink>
      </div>
      <div className="center">
        <button>An.gelic</button>
      </div>
      <div className="right">
        <div className="search">
          <img src={search_icon} alt="" />
          <input type="text" placeholder="search..." />
        </div>
        <div className="action-btns">
          <button className="cart-btn">
            <img src={cart_icon} alt="" />
            <span>10</span>
          </button>
          <button>
            <img src={login_icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

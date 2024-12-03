import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import login_icon from "../../assets/icons/login-.png";
import Cart from "../Cart/Cart";
import { IoIosArrowDown } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className={`nav-links `}>
          <NavLink>Home</NavLink>
          <NavLink to={"/collections"} className={"collections-nav"}>
            Collections <IoIosArrowDown />
            <div className="collections-dropdown">
              <div>
                <strong>Women</strong>
                <hr />
                <Link to={"/collections/shoulder-bags"}>Shoulder Bag</Link>
                <Link to={"/collections/hand-bags"}>Hand Bag</Link>
                <Link to={"/collections/tote-bags"}>Tote Bag</Link>
                <Link to={"/collections/backpacks"}>Backpack</Link>
                <Link to={"/collections/mini-bags"}>Mini Bag</Link>
              </div>
              <div>
                <strong>Backpacks</strong>
                <hr />
                <Link to={"/collections/backpacks"}>All Backpacks</Link>
              </div>
            </div>
          </NavLink>

          <NavLink to={"/about-us"}>About Us</NavLink>
          <NavLink to={"/contact-us"}>Contact Us</NavLink>
          <NavLink className={"login-link"} to={"/login"}>
            Login
          </NavLink>
        </div>
        <MobileMenu />
      </div>
      <div className="center">
        <NavLink to={"/"}>MehShiq</NavLink>
      </div>
      <div className="right">
        <Search />
        <div className="action-btns">
          <Cart />
          <button className="nav-login-btn">
            <img src={login_icon} alt="" className="login-btn" /> Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

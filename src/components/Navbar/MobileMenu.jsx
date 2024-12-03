import { Link, NavLink } from "react-router-dom";
import "./mobileMenu.css";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import menu from "../../assets/icons/menu.png";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const links = {
  women: [
    {
      path: "/collections/shoulder-bags",
      title: "Shoulder Bag",
    },
    {
      path: "/collections/hand-bags",
      title: "Hand Bag",
    },
    {
      path: "/collections/tote-bags",
      title: "Tote Bag",
    },
    {
      path: "/collections/backpacks",
      title: "Backpacks",
    },
    {
      path: "/collections/mini-bags",
      title: "Mini Bags",
    },
  ],
  backpacks: [
    {
      path: "/collections/backpacks",
      title: "All Backpacks",
    },
  ],
};

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [collectionsNavOpen, setCollectionsNavOpen] = useState({
    backpacks: false,
    women: false,
  });

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    }
  }, [navOpen]);
  return (
    <div className="mobileMenu">
      <div
        className={`overlay ${navOpen ? "overlayShow" : "overlayHide"}`}
        onClick={() => setNavOpen(false)}
      ></div>
      <div
        className={`mobileMenu-container ${navOpen ? "nav-open" : "nav-close"}`}
      >
        <h3>Mehshiq</h3>
        <hr />
        <button className="mobileMenu-close" onClick={() => setNavOpen(false)}>
          <RxCross2 />
        </button>
        <NavLink onClick={() => setNavOpen(false)} to={"/"}>
          Home
        </NavLink>
        <li className="mobileMenu-collections-nav">
          <NavLink
            onClick={() => setNavOpen(false)}
            to={"/collections"}
            className={"collections-nav"}
          >
            Women Collections
          </NavLink>
          <button
            onClick={() =>
              setCollectionsNavOpen({
                backpacks: false,
                women: !collectionsNavOpen.women,
              })
            }
          >
            {collectionsNavOpen.women ? <HiOutlineMinus /> : <HiOutlinePlus />}
          </button>
        </li>

        {collectionsNavOpen.women && (
          <div className="mobileMenu-collections-dropdown">
            <div>
              <strong>Women</strong>
              {links.women.map(({ title, path }, i) => (
                <Link to={path} key={i} onClick={() => setNavOpen(false)}>
                  {title}
                </Link>
              ))}
            </div>
          </div>
        )}
        <li className="mobileMenu-collections-nav">
          <NavLink
            onClick={() => setNavOpen(false)}
            to={"/collections"}
            className={"collections-nav"}
          >
            Backpacks
          </NavLink>
          <button
            onClick={() =>
              setCollectionsNavOpen({
                backpacks: !collectionsNavOpen.backpacks,
                women: false,
              })
            }
          >
            {collectionsNavOpen.backpacks ? (
              <HiOutlineMinus />
            ) : (
              <HiOutlinePlus />
            )}
          </button>
        </li>
        {collectionsNavOpen.backpacks && (
          <div className="mobileMenu-collections-dropdown">
            <div>
              <strong>Backpacks</strong>
              {links.backpacks.map(({ path, title }, i) => (
                <Link to={path} key={i} onClick={() => setNavOpen(false)}>
                  {title}
                </Link>
              ))}
            </div>
          </div>
        )}
        <NavLink onClick={() => setNavOpen(false)} to={"/women"}>
          Order Status
        </NavLink>
        <NavLink onClick={() => setNavOpen(false)} to={"/about-us"}>
          About Us
        </NavLink>
        <NavLink onClick={() => setNavOpen(false)} to={"/contact-us"}>
          Contact Us
        </NavLink>
        <div className="authentication-link">
          <NavLink onClick={() => setNavOpen(false)} to={"/login"}>
            Login
          </NavLink>
          <span></span>
          <NavLink
            onClick={() => setNavOpen(false)}
            className={"login-link"}
            to={"/login"}
          >
            Register
          </NavLink>
        </div>
      </div>
      <button onClick={() => setNavOpen((prev) => !prev)}>
        <img src={menu} alt="" className="menu-btn" />
      </button>
    </div>
  );
};

export default MobileMenu;

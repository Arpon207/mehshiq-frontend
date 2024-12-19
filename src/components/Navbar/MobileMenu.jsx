import { Link, NavLink } from "react-router-dom";
import "./mobileMenu.css";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import menu from "../../assets/icons/menu.png";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { useGetPostsQuery } from "../../redux/postAPI";

const links = [
  { name: "Shoulder Bags", path: "shoulder-bags" },
  { name: "Tote Bags", path: "tote-bags" },
  { name: "Hand Bags", path: "hand-bags" },
  { name: "Backpacks", path: "backpacks" },
  { name: "Crossbody Bags", path: "crossbody-bags" },
  { name: "Bucket Bags", path: "bucket-bags" },
  { name: "Mini Bags", path: "mini-bags" },
  { name: "Clutch Bags", path: "clutch-bags" },
  { name: "Travel Bags", path: "travel-bags" },
];

const MobileMenu = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [collectionsNavOpen, setCollectionsNavOpen] = useState(false);
  const { data } = useGetPostsQuery();

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
            Collections
          </NavLink>
          <button onClick={() => setCollectionsNavOpen(!collectionsNavOpen)}>
            {collectionsNavOpen ? <HiOutlineMinus /> : <HiOutlinePlus />}
          </button>
        </li>

        {collectionsNavOpen && (
          <div className="mobileMenu-collections-dropdown">
            <div>
              <NavLink
                to={"/collections"}
                onClick={() => {
                  setNavOpen(false);
                  setCollectionsNavOpen(false);
                }}
              >
                All Bags
              </NavLink>
              {data?.map(({ title }, i) => (
                <Link
                  to={`/collections/${title
                    .split(" ")
                    .join("-")
                    .toLocaleLowerCase()}`}
                  key={i}
                  onClick={() => {
                    setNavOpen(false);
                    setCollectionsNavOpen(false);
                  }}
                >
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
            to={"/register"}
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

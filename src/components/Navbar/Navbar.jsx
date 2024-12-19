import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import login_icon from "../../assets/icons/login-.png";
import Cart from "../Cart/Cart";
import { IoIosArrowDown } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import Search from "../Search/Search";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../Lib/firebase.config";
import { useGetPostsQuery } from "../../redux/postAPI";

const Navbar = () => {
  const [signOut, loading, error] = useSignOut(auth);

  const { data: categories } = useGetPostsQuery();

  const [user] = useAuthState(auth);
  return (
    <div className="navbar">
      <div className="left">
        <div className={`nav-links `}>
          <NavLink>Home</NavLink>
          <NavLink to={"/collections"} className={"collections-nav"}>
            Collections <IoIosArrowDown />
            <div className="collections-dropdown">
              <div className="collection-dropdown-content">
                <div>
                  <strong>For Women</strong>
                  <hr />
                  {categories?.slice(0, 3).map(({ title }, i) => (
                    <Link
                      to={`/collections/${title
                        .split(" ")
                        .join("-")
                        .toLocaleLowerCase()}`}
                    >
                      {title}
                    </Link>
                  ))}
                  <Link to={"/collections"}>
                    <strong>More...</strong>
                  </Link>
                </div>
                <div>
                  <strong>Backpacks</strong>
                  <hr />
                  <Link to={"/collections/backpacks"}>All Backpacks</Link>
                </div>
                <div>
                  <strong>For Travels</strong>
                  <hr />
                  <Link to={"/collections/backpacks"}>All Travel Bags</Link>
                </div>
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
          {user ? (
            <div className="user">
              <div className="userBtn">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <p>{user.displayName.substring(0, 1)}</p>
                )}
                <div className="userDropdown">
                  <div className="userDetails">
                    <div className="userImage">
                      {user.photoURL ? (
                        <img src={user.photoURL} alt="" />
                      ) : (
                        <p>{user.displayName.substring(0, 1)}</p>
                      )}
                    </div>
                    <div>
                      <strong>{user.displayName}</strong>
                      <p>{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <Link>My Orders</Link>
                  <button onClick={async () => await signOut()}>Signout</button>
                </div>
              </div>
            </div>
          ) : (
            <NavLink className="nav-login-btn" to={"/login"}>
              <img src={login_icon} alt="" className="login-btn" /> Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div id="sidebar">
        <h1> Layout </h1>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                isPending ? "notactive" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/abo"
              className={({ isActive, isPending }) =>
                isPending ? "notactive" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/loggin"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "notactive" : ""
              }
            >
              Log in
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "notactive" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "notactive" : ""
              }
            >
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "notactive" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/protected"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "notactive" : ""
              }
            >
              Protected
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Layout;

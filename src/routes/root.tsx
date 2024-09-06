import { Outlet, Link } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../pages/Layout";

import LoggedIn from "../pages/LoggIn";

export default function Root() {
  const [user, setUser] = useState(true);

  return (
    <div id="wrapper">
      <Layout />

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

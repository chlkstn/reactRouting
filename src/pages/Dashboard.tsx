import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <h1> my Dashboard</h1>;
      <ul>
        <li>
          <Link to="stats">Stats</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;

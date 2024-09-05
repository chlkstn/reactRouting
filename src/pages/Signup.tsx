import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <h2>Signup </h2>
      <ul>
        <li>
          <Link to="step1">Prev</Link>
        </li>
        <li>
          <Link to="step2">Next</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Signup;

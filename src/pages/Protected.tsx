import React from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";

const Protected = () => {
  const user = useOutletContext();
  const navigate = useNavigate();

  if (user === true) {
    return (
      <>
        <h1> You are Logged in. Welcome to secrets</h1>
      </>
    );
  } else {
    return <Navigate to="/loggin" replace={true} />;
  }
};

export default Protected;

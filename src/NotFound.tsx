import { Navigate, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <h2> Oh no.. Its an error Redirecting in 5 sec!</h2>
    </>
  );
};
export default NotFound;

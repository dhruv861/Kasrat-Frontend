import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedtRoutes = ({ children }) => {
  const token = window.localStorage.getItem("access");
  if (!token) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedtRoutes;

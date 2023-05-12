import { Navigate } from "react-router-dom";
const ProtectedtRoutes = ({ children }) => {
  const token = window.localStorage.getItem("access");
  if (!token) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedtRoutes;

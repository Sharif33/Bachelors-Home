import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import routesConfig from "./routes.config";

const PrivateRoute = ({ children }: { children: any }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  }
  return (
    <Navigate to={routesConfig.LOGIN} state={{ from: location }} replace />
  );
};

export default PrivateRoute;

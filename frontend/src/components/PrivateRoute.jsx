import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function PrivateRoute({ children }) {
  const { user } = React.useContext(AuthContext);

  return user ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

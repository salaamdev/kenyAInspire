import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function InstructorPrivateRoute({ children }) {
    const { user } = React.useContext(AuthContext);

    return user ? children : <Navigate to="/instructor-login" />;
}

export default InstructorPrivateRoute;

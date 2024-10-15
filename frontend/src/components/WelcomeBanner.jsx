import React from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./componentStyles/WelcomeBanner.css";

function WelcomeBanner() {
  const { user } = React.useContext(AuthContext);

  return (
    <div className="banner">
      <h2>Welcome back, {user.name}!</h2>
      <p>
        “Education is the most powerful weapon which you can use to change the
        world.” – Nelson Mandela
      </p>
    </div>
  );
}

export default WelcomeBanner;

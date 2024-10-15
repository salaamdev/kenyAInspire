import React from "react";
import "./componentStyles/Container.css";

function Container({ children, className }) {
  return <div className={`container ${className || ""}`}>{children}</div>;
}

export default Container;

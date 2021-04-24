import React from "react";
import logo from "../logo.svg";

const LoadingSpinner = ({ hidden }) => {
  return (
    <div
      className="loading-animation"
      style={hidden ? { display: "none" } : {}}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <h4>L O A D I N G</h4>
    </div>
  );
};

export default LoadingSpinner;

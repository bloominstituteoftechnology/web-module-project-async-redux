import React from "react";
import logo from "../logo.svg";

const LoadingSpinner = () => {
  return (
    <div className="loading-animation">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>L O A D I N G</h3>
    </div>
  );
};

export default LoadingSpinner;

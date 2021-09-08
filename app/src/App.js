import React from "react";

import List from "./components/List";
import Favorites from "./components/List";

import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>Price Action for Bitcoin and Ethereum</h1>
      </nav>
      <div className="favorites">
        <Favorites />
      </div>
      <div className="list">
        <List />
      </div>
    </div>
  );
}

export default App;

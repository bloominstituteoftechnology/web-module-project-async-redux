import React from "react";
import { connect } from "react-redux";

import List from "./components/List";
import Favorites from "./components/List";

import "./App.css";

function App(props) {
  return (
    <div>
      <div className="header">
        <h1>Cryptocurrency Tracker</h1>
      </div>
      <div className="favorites">
        <Favorites />
      </div>
      <div className="list">
        <List />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cryptos: state.cryptos,
  };
};

export default connect(mapStateToProps)(App);

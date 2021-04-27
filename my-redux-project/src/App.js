import React from "react";
import './App.css';

import Quote from "./component/Quote";
import { gotReducer } from "./reducers/gotReducer"; //Does this need in here? I don't think so

function App() {
  return (
    <div className="App">
      <Quote />
    </div>
  );
}

export default App;

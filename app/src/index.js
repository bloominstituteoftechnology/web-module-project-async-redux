import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import reducer from './reducers/index';
import thunk from "redux-thunk";

// Step 1: create the Redux store
const store = createStore(reducer, applyMiddleware(logger, thunk));

function App() {

  const Rick = "Rick"
  const Morty = "Morty"
console.log(Rick)

  return (
    <div className="App">
      <h1>{Rick} And {Morty}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");

// Step 2: Provide the store
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

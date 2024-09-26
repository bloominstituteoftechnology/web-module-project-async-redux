import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { Provider } from "react-redux";

import { rootReducer } from "./reducers/rootReducer";

import thunk from "redux-thunk";
import AwsomePics from "./components/AwsomePics";

// Step 1: create the store
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

function App() {
  return (
    <div className="App">
      <AwsomePics />
    </div>
  );
}

const rootElement = document.getElementById("root");

// Step 2: provide the store
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);


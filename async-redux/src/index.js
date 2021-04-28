import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
import { adviceReducer } from "./reducers/adviceReducers";
import thunk from "redux-thunk";
import App from "./App";

//create store
const store = createStore(adviceReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from "redux";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
import { gotReducer } from "./reducers/gotReducer"; // My reducer will be named gotReducer, file name gotReducer.js
import thunk from "redux-thunk";

const store = createStore(gotReducer, applyMiddleware(logger, thunk));
const rootElement = document.getElementById("root");

ReactDOM.render(<Provider store={store}><App/></Provider>, rootElement)

//THIS PAGE SHOULD BE COMPLETE IN SETUP
//installed all dependencies and libraries in package.json

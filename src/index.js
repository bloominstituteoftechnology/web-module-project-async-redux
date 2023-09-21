import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// Comment out the import of 'redux-logger'
// import logger from 'redux-logger';
import reducer from './reducers';
import App from './App';

// import dotenv from 'dotenv';
// dotenv.config();

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));


ReactDOM.render(
  <Provider store={store}>
    <App />
    
  </Provider>,
  document.getElementById('root')
);

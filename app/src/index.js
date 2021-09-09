import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

import reducer from './reducers';

import reportWebVitals from './reportWebVitals';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

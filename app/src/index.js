// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
//redux helper
import missonReducer from './store/reducers'; // reducer

//component

import App from './App';

//stylesheet
import './index.css';

const store = createStore(
  missonReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
store.getState();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

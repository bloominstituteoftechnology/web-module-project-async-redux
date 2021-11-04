import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './Reducers/reducer';


const store = createStore(reducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {createStore, compose, applyMiddleware} from 'redux';
import { reducer } from './reducers/activity.reducer';

//applyMiddleware(thunk)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(

  <Provider store={store}>
  <App />
  </Provider>,

  document.getElementById('root')
);

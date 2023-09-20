import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// Comment out the import of 'redux-logger'
// import logger from 'redux-logger';
// Comment out the import of 'reducers'
// import rootReducer from './reducers';
import App from './App';

const placeholderReducer = (state = {}, action) => {
  return state;
};

const middleware = [thunk];
const store = createStore(placeholderReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
    import { legacy_createStore, compose, applyMiddleware } from 'redux'
    import thunk from 'redux-thunk'
    import reducer from './reducer/reducer'

import App from './App';
import './index.css';

let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
}
resetStore()

ReactDOM.render(
  <Provider store={store}>
 <App />
  </Provider>,
  document.getElementById('root')
);

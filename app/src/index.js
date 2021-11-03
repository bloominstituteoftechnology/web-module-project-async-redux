import React from 'react';
import ReactDOM from 'react-dom';
import Morty from './components/Morty'

import reducer from './reducers/index'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from "redux-logger";
import thunk from "redux-thunk";


const store = createStore(reducer, applyMiddleware(logger, thunk));
function App() {
  return (
    <div className="App">
      <Morty />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);

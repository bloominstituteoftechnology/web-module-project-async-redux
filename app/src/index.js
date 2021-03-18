import React, { router } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom'

import { reducer } from './store'

import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk,logger));

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>
,
  document.getElementById('root')
);




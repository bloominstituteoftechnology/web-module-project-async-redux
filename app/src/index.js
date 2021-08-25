import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider} from 'react-redux';
import reducer from './reducers/mainReducer';
import thunk from 'redux-thunk'

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const store = createStore(reducer, compose(applyMiddleware(thunk),
window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
  <Provider store={store}>
  <Router>
      <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);

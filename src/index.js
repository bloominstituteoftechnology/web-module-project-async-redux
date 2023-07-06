import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './reducers/cardReducer';
import { Provider } from 'react-redux';

const store = configureStor({
  reducer: {
    card: cardReducer
  }
})

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

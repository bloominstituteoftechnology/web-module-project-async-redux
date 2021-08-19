import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './Reducers/yeezusReducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {ThemeProvider} from 'styled-components'
import Theme from './Theme.js';


const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

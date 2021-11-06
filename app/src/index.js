import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers';

import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(
  reducer, 
  // applyMiddleware(thunk)
  applyMiddleware(thunk, logger)
);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import cardReducer from './reducers/cardReducer';
import { Provider } from 'react-redux';

const store = configureStore({
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

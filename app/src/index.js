import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'; //step 1 
import { Provider } from 'react-redux';// step 2 

import './index.css';
import App from './App';

import reducer from './Reducer'; //step 8 
const store = createStore(reducer); // step 3 

ReactDOM.render(// step 4 apply provider and store
  <Provider store={store}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


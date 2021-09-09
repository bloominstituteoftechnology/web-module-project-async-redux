// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from '../reducers/index';

import logger from 'redux-logger';
import thunk from 'redux-thunk';


export const store = createStore(reducer, applyMiddleware(thunk, logger));

// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });


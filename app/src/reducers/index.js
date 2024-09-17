import { combineReducers } from 'redux';

import Fox from './Fox.js';

const rootReducer = combineReducers({
  fox: Fox
});

export default rootReducer;
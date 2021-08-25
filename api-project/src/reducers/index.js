import { applyMiddleware, combineReducers, createStore } from "redux";
import { wordFormReducer } from "./word-form.reducer";
import { wordInfoReducer } from "./word-info.reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    form: wordFormReducer,
    info: wordInfoReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
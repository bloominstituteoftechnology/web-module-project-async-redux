import { applyMiddleware, combineReducers, createStore } from "redux";
import { dogFactsFormReducer } from "./dog-facts-form.reducer";
import { dogFactsReducer } from "./dog-facts.reducer";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    form: dogFactsFormReducer,
    info: dogFactsReducer,
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
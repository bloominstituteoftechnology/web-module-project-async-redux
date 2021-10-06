import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { GET_TEAMS, GOT_TEAMS } from "../actions";
import axios from 'axios'

const initialState = {
    teams: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GOT_TEAMS:
            console.log(action)
            return {
                ...state, teams: action.payload
            }
        default:
            return state
    }
}




export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
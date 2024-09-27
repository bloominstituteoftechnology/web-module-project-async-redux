import react from 'react'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extensions'
import { DICTIONARY_CALL, DICTIONARY_INFO } from '../actions/index';
import axios from 'axios';

const initialState = {
	dictionary: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case DICTIONARY_INFO:
			return {
				...state, dictionary: action.payload
			}
		default:
			return state
	}
}

export const store= createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
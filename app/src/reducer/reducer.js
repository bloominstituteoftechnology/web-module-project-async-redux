import { FETCH_POKEMONS_BEGIN, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAIL } from '../action/action.js';

const initialState = {
    isLoading: false,
    pokemon: [],
    error:''
};

export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMONS_BEGIN:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                pokemon: action.payload,
                error: ''
            };
        case FETCH_POKEMONS_FAIL:
            return {
                ...state,
                isLoading:false,
                error: action.payload
            };
        default:
            return state;    
    }
}; 
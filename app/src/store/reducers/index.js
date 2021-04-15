import { FETCH_POKEMON_SUCCESS } from '../actions';

export const initialState = {
    pokemon: []
}

export const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.payload
            }
        default:
            return state;

        
    }
}
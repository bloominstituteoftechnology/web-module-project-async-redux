import { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS } from '../actions/index'

const initialState = {
    isLoading: false,
    charactersData: [],
    error: ""
};

export const charactersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                charactersData: action.payload
            }
        default:
            return state;
    };
};

import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, CHANGE_LANGUAGE } from "../actions";

const intitialState = {
    data: [],
    error: "",
    fetching: false,
    english: true
}

const reducer = (state = intitialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                data: action.payload
            }
        case FETCH_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload    
            }
        case CHANGE_LANGUAGE:
            return {
                ...state,
                english: !state.english
            }
        default: 
            return state
    }
}

export default reducer;
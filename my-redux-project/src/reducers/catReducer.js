import { FETCHING_FAILURE, FETCHING_START, FETCHING_SUCCESS } from "../actions/actions";

const initialState = {
    fact: '',
    error: '',
    loading: false
}

export const catReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state, loading: true
            }
        case FETCHING_SUCCESS:
            return {
                ...state, loading: false, fact: action.payload
            }
        case FETCHING_FAILURE:
            return {
                ...state, loading: false, error: action.payload
            }
        default:
            return state;
    }
}
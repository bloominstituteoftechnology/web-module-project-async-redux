import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAILURE, TOGGLE_EDITING, UPDATE_TITLE } from "../actions/actions";

// Define initial state
const initialState = {
    display: false,
    fact: ""
};


// Define a reducer with all state management functions related to the title

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_QUOTE_START:
            return { ...state, display: true }
        case FETCHING_QUOTE_SUCCESS:
            return { ...state, loading: false, fact: action.payload }
        case FETCHING_QUOTE_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            console.log("Error: unknown action type in Title Reducer");
            return state;  
    }
}
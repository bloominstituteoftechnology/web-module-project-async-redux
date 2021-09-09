import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
    dog: {
        image: ''
    },
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case(FETCH_START):
        return({
            ...state, 
            isFetching: true, 
            error: ''
        })
        case(FETCH_SUCCESS):
        return({
            ...state, 
            dog: action.payload,
            isFetching: false
        })
        case (FETCH_FAIL):
            return({
                ...state,
                isFetching: false, 
                error: action.payload
            })
    default: 
    return state;
    }
};
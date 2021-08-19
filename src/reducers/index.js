import { FETCH_FAIL, IS_FETCHING, FETCH_SUCCESS } from '../actions'

const initialState = {
    breweries: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(IS_FETCHING):
            return ({
                ...state,
                isFetching: true,
                error: ''
            })
        case(FETCH_SUCCESS):
            return ({
                ...state,
                isFetching: false,
                breweries: action.payload
            })
        case(FETCH_FAIL):
            return ({
                ...state,
                isFetching:false,
                error: action.payload
            })
        default:
            return state;
    }
}
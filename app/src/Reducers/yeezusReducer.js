import {FETCH_FAIL, FETCH_SUCCESS, FETCH_START} from '../Actions/yeIndex'

const initialState={
    quote: "",
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case(FETCH_START):
            return({
                ...state,
                isFetching: true,
                error: ''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                quote: action.payload,
                isFetching: false
            });
        case(FETCH_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            });
        default:
            return state;
    }
}
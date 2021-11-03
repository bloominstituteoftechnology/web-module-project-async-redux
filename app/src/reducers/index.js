import { FETCH_SUCCESS, IS_FETCHING, ERROR } from './../actions';

const initialState = {
    suggestion:{
        activity:'',
        type:''
    },
    isFetching: false,
    error:''
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case(FETCH_SUCCESS):
            return({
                ...state,
                suggestion: action.payload,
                isFetching: false
            });
        case(IS_FETCHING):
            return({
                ...state,
                isFetching: true
            });
        case(ERROR):
            return({
                ...state,
                ifFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}
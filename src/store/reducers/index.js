import {DATA_LOADING, DATA_SUCCESS, DATA_LOAD_ERR} from '../actions'

const initialState = {
    isLoading: false,
    data: [],
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case DATA_SUCCESS: 
            return {...state,
                data: action.payload,
                isLoading: false,
                error: ''};
        case DATA_LOAD_ERR:
            return{...state,
                error: 'Error fetching data. Try refreshing the page.'}
        default:
            return{
                ...state
            }
    }
}
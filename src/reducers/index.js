import { FETCHING_ORDERS_LOADING, FETCHING_ORDERS_SUCCESS, FETCHING_ORDERS_FAIL} from '../actions'

const initialState = {
    crypto: [],
    isFetching: false,
    error: ''

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCHING_ORDERS_LOADING):
            return ({
                ...state,
                isFetching: true
            })
        case (FETCHING_ORDERS_SUCCESS):
            return ({
                ...state,
                crypto:  action.payload,
                error: '',
                isFetching: false
                })
        case (FETCHING_ORDERS_FAIL):
            return ({
                ...state,
                error: action.payload,
                isFetching: false
            })   
        default: 
            return state;
    }
}
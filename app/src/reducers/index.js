import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions';

const initialState = {
    teams: {
        name: '',
        isFetching: false,
        error: ''
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case (FETCH_START):
            // console.log('fetch start works')
            return ({
                ...state,
                name: '',
                isFetching: true,
                error: ''
            });
        case (FETCH_SUCCESS):
            // console.log('fetch success works')
            return ({
                ...state,
                name: action.payload,
                isFetching: false,
                error: ''
            });
        case (FETCH_FAIL):
            return ({
                ...state,
                name: '',
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
};

export default reducer
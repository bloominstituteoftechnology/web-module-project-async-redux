import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions';

const initialState = {
    teams: {
        name: '',
        
    },
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case (FETCH_START):
            // console.log('fetch start works')
            return ({
                ...state,
                teams: {},
                isFetching: true,
                error: ''
            });
        case (FETCH_SUCCESS):
            // console.log('fetch success works')
            return ({
                ...state,
                teams: action.payload,
                isFetching: false,
                error: ''
            });
        case (FETCH_FAIL):
            return ({
                ...state,
                teams: {},
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
};

export default reducer
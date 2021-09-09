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
            return ({
                ...state,
                teams: {},
                isFetching: true,
                error: ''
            });
        case (FETCH_SUCCESS):
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
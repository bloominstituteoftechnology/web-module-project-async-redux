import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions';

const initialState = {
    tabs: {
        title: "",
        tabTypes: "",
        isFetching: false,
        error: ""
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case (FETCH_START):
            return ({
                ...state,
                title: {},
                tabTypes: "",
                isFetching: true,
                error: ''
            });
        case (FETCH_SUCCESS):
            return ({
                ...state,
                title: action.payload,
                tabTypes: '',
                isFetching: false,
                error: ''
            });
        case (FETCH_FAIL):
            return ({
                ...state,
                title: {},
                tabTypes: "",
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
};

export default reducer
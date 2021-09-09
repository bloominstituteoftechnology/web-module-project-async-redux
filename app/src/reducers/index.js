import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "../actions";

const initialState = {
    show: {},
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return({
                ...state,
                show: {},
                isFetching: true,
                error: ''
            });
        case FETCH_SUCCESS:
            return({
                ...state,
                show: action.payload,
                isFetching: false,
                error: ''
            });
        case FETCH_FAIL:
            return({
                ...state,
                error: `No more music?! Say it ain't so!!`,
                isFetching: false,
                show: {}
            });
        default:
            return state;
    };
};

export default reducer;
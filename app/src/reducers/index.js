import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "../actions";

const initialState = {
    genre: '',
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return({
                ...state,
                genre: 'Phish is probably still better...',
                isFetching: true,
                error: ''
            })
        case FETCH_SUCCESS:
            return({
                ...state,
                genre: action.payload,
                isFetching: false,
                error: ''
            })
        case FETCH_FAIL:
            return({
                ...state,
                error: `No more music?! Say it ain't so!!`,
                isFetching: false,
                genre: `Would still rather be at Phish...`
            })
        default:
            return state
    }
};

export default reducer;
import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START } from "../actions";

const initialState = {
    genre: 'phish',
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SUCCESS:
            return({
                ...state,
                genre: action.payload
            })
        case FETCH_START:
            return({
                ...state,
                isFetching: true
            })
        case FETCH_FAIL:
            return({
                ...state,
                error: `You've failed your mission, comrade`
            })
        default:
            return state
    }
};

export default reducer;
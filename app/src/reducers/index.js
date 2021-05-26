import { SET_FETCHING_COIN } from '../actions';

const initialState = {
    coin: {},
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCHING_COIN:
        return {
            ...state,
            isFetching: true
        }
        default:
        return state;
    }
};
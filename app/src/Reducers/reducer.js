import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from '../Actions/actions';

const initialState = {
    data: {
        "ID Nation": "asd",
        "Nation": "USA",
        "ID Year": "456",
        "Year": "2021",
        "Population": "A lot",
        "Slug Nation": "asd"
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return{
                ...state,
                data: {},
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                data: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_FAIL:
            return{
                ...state,
                data: {},
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}
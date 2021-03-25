import {
    FETCH_RICKS_SUCCESS,
    FETCH_RICKS_START,
    FETCH_RICKS_ERROR
} from '../actions';

const initialState = {
  isLoading: false,
  characterList: [],
  error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RICKS_START:
            return {
                ...state,
                isLoading: true,
            }
            case FETCH_RICKS_SUCCESS:
                return{
                    ...state,
                    characterList: action.payload,
                    isLoading: false,
                    error: '',
                }
            case FETCH_RICKS_ERROR: 
            return{
                ...state,
                isLoading: false, 
                error: action.payload
            }

    default:
        return state;
    }
};

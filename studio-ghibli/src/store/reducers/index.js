import {
	FETCH_MOVIE_DATA_SUCCESS,
	FETCH_MOVIE_DATA_FAILURE,
	LOADING_DATA,
} from '../actions';

const initialState = {
	movieList: [],
	isLoading: false,
	error: '',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING_DATA:
			return {
				...state,
				isLoading: true,
			};
		case FETCH_MOVIE_DATA_SUCCESS:
			return {
				...state,
				error: '',
				movieList: action.payload,
				isLoading: false,
			};
		case FETCH_MOVIE_DATA_FAILURE:
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};

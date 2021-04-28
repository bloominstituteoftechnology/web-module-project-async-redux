import {
  ADVICE_START,
  ADVICE_SUCCESS,
  ADVICE_FAILURE,
} from "../actions/adviceActions";

const initialState = {
  advice: [],
  loading: false,
  error: "",
};

export const adviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADVICE_START:
      return {
        ...state,
        loading: true,
      };
    case ADVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        advice: action.payload,
      };
    case ADVICE_FAILURE:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

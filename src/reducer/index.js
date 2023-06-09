import { zipCodeData } from "../zipCodeData/zipCodeData";
import { FETCH_START, SUCCESSFUL_FETCH } from "../actions";

const initialState = {
  zipCodeData: zipCodeData,
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case SUCCESSFUL_FETCH:
      return {
        ...state,
        loading: false,
        zipCodeData: action.payload,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;

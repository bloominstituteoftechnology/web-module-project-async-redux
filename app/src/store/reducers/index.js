import { MISSON_START,MISSON_SUCCESS } from '../actions/index';

const initialstate = {
  isLoading: false,
  missionsData: [],
  error: '',
};

const missonReducer = (state = initialstate, action) => {
  switch (action.type) {
    case MISSON_START:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
      case MISSON_SUCCESS :
        return {
          ...state,
          isLoading: false,
          missionsData: action.payload
        }
    default:
      return state;
  }
};

export default missonReducer;

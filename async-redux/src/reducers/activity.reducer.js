import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions/activity.actions";

const initialState={
    loading:false,
    activity:null,
    error:''
}


export const reducer = (state = initialState, action) => {

    const {type, payload} = action
    switch (type) {
      case(FETCH_START):
        return({
          ...state,
          activity: null,
          loading:true,
          error:''
        });
      case(FETCH_SUCCESS):
        return({
            ...state,
            activity: payload,
            loading:true,
            error:''
        });
      case(FETCH_ERROR):
        return({
            ...state,
            activity: null,
            loading:false,
            error:payload
        })
      default:
        return state;
    }
  };
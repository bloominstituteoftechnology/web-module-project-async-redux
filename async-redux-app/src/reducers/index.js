import { START_FETCH, SUCCESSFUL_FETCH, FAILD_FETCH } from "./../actions";

const initialState = {
  dog: {
    image: ''
  },
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (START_FETCH):
        return ({
            ...state,
            isFetching: true,
            error: ''
        });
    case (SUCCESSFUL_FETCH):
        return ({
            ...state,
            dog: action.payload,
            isFetching: false
        });
    case (FAILD_FETCH):
        return ({
            ...state,
            error: action.payload,
            isFetching: false
        })
    default:
        return state;
}
};

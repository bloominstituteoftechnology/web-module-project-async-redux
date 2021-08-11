
//Import the actions
import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from "../actions/actions"

//Initial state object
const initialState =
{
    //Monster object
    monster: 
    {
        name: "wingnut",
        url: ""
        // size: "",
        //alignment: ""

    },

    isFetching: false,
    error: ""
}

//Reducer function, pass in initialState and action, assign to state
export const reducer = (state = initialState, action) =>
{
    switch (action.type) 
    {
        //Start the fetch
        case(FETCH_START):
          return({
            ...state,
            isFetching: true,
            error: ''
          });

          //Success case
        case(FETCH_SUCCESS):
          return({
            ...state,
            monster: action.payload,
            isFetching: false
          });

          //Fail case
        case(FETCH_FAIL):
          return({
            ...state,
            error: action.payload,
            isFetching: false
          })

          //Default case
        default:
          return state;
      }
}
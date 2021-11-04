
import { FETCH_SUCCESS } from '../actions';

    const initialState = {
        message: 
            {
            'affenpinscher':[],
            "african":[]
        }
        
      };
    
      function reducer(state = initialState, action) {
        console.log("reducer ",state)
        console.log("reducer  action == ",action.payloads)
        switch (action.type) {
            case(FETCH_SUCCESS):
            return({
              ...state,
              message: action.payload,
            });
                default:
                return state;
            }
    
    }
    export default reducer;
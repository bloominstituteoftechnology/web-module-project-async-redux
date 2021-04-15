import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";


export const cat = () => (dispatch) => {
    dispatch({ type: FETCHING_QUOTE_START });

    axios.get("https://catfact.ninja/fact")
    .then(res => {
        console.log(res.data)
        dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.fact });
        
    })
    .catch(err => {
        dispatch({ type: FETCHING_QUOTE_FAILURE, payload: err });
    })
};


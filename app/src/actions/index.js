import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const IS_FETCHING = "IS_FETCHING";
export const ERROR = "ERROR";

export const fetchSuccess = (suggestion)=>{
    return({type:FETCH_SUCCESS, payload: suggestion})
}

export const isFetching = () =>{
    return({type:IS_FETCHING})
}

export const getSuggestion = () =>{
    return (dispatch) => {
        dispatch(isFetching());

        axios.get('https://www.boredapi.com/api/activity/')
            .then(resp=> {
                dispatch(fetchSuccess({activity:resp.data.activity, type: resp.data.type}))
            })
            .catch(err => {
                dispatch(error(err));
            });
    }
};

export const error = (e)=>{
    return({type:IS_FETCHING, payload: e})
}

import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FAIL_FAIL";

export const getShow = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });

        axios.get('https://animechan.vercel.app/api/random')
            .then(resp => {
                dispatch(fetchSuccess(resp.data))
            })
            .catch(err => {
                dispatch(fetchFail(err));
            });
    }

}

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess= (show) => {
    return({type: FETCH_SUCCESS, payload:show});
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error});
}

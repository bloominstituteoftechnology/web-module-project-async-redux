import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getTabs = () => {
    return(dispatch) => {
        dispatch(fetchStart());

        axios.get('https://www.songsterr.com/a/ra/songs/byartists.xml?artists=TomWaits,%22Tom%20Waits%22')
        .then(res => {
            dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchFail(err));
        });
    }
}

export const fetchStart = () => {
    return ({ type: FETCH_START });
}

export const fetchSuccess = (tabs) => {
    return ({ type: FETCH_SUCCESS, payload: tabs });
}

export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
}
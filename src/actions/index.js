
export const FETCH_START = "FETCH_START";
export const fetchStart = () => ({
    type: FETCH_START
})

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (data) => ({
    type: FETCH_SUCCESS,
    payload: data
})

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (err) => ({
    type: FETCH_FAIL,
    payload: err
})
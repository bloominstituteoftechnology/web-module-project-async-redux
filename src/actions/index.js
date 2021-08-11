
export const FETCH_START = "FETCH_START";
export const fetchStart = () => ({
    action: FETCH_START
})

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const fetchSuccess = (data) => ({
    action: FETCH_SUCCESS,
    payload: data
})

export const FETCH_FAIL = "FETCH_FAIL";
export const fetchFail = (err) => ({
    action: FETCH_FAIL,
    payload: err
})
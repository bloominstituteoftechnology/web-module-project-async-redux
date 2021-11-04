

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (message)=> {
    console.log("fetchSuccess")
    return({type: FETCH_SUCCESS, payload:message});
}
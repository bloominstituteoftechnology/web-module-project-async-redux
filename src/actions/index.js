import axios from "axios";

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

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const changeLanguage = () => ({
    type: CHANGE_LANGUAGE
})

export const getData = () => dispatch => {
    dispatch(fetchStart())
    axios.get("https://api.quran.com/api/v4/chapters?language=en")
      .then(res => dispatch(fetchSuccess(res.data.chapters)))
      .catch(err => dispatch(fetchFail(err)))
  }
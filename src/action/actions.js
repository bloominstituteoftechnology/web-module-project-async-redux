import axios from"axios"
import { connect } from "react-redux";

export const FETCH_DATA_START="FETCH_DATA_START";
export const FETCH_DATA_SUCCESS="FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL="FETCH_DATA_FAIL";

export const fetchData = ()=>{
    return (dispatch) =>{
        dispatch({type:FETCH_DATA_START})
        axios
        .get('https://api.kanye.rest')
        .then(res =>  
            dispatch({type:FETCH_DATA_SUCCESS, payload:res.data.quote})
        )
        .catch()
    }
}

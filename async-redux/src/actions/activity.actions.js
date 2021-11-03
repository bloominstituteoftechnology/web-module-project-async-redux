import axios from "axios"



export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_ERROR = "FETCH_ERROR";

export const getActivity = () =>{
    return (dispatch)=> {
        dispatch({
            type:FETCH_START
        })
    
        axios.get("https://www.boredapi.com/api/activity")
        .then(res=>{
            dispatch({
                type:FETCH_SUCCESS,
                payload:res.data.activity
            })
        })
        .catch(err=>{
            console.error(err)
        })
    }
}
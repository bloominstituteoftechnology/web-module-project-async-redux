import axios from 'axios'
export const FETCH_START = "FETCH_START"
export const FETCH_SUCCESS = "FETCH SUCCESS"
export const FETCH_FAIL = "FETCH_FAIL"

export const getFood = () => {
    return (dispatch) => {
        dispatch({type:FETCH_START})
        axios.get('https://foodish-api.herokuapp.com/api/')
        .then(image=> {
            console.log("IMAGE ", image.data.image)
            dispatch({type:FETCH_SUCCESS, payload:image.data.image})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:FETCH_FAIL, payload:'This is an error!!!'})
        })
    }
}
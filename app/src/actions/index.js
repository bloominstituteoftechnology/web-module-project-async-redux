import axios from "axios";

export const getCat = () =>{
    return(dispatch) =>{
        dispatch(fetchStart());
        axios.get('https://cat-fact.herokuapp.com/facts')
        .then(res=>{
            console.log(res.data[0].text)
            dispatch(fetchSuccess(res.data.map(item => item.text)))
        })
        .catch(err=>{
            dispatch(fetchFail(err));
        })
    }
}

export const FETCH_START ="FETCH_START";
export const FETCH_SUCCESS ="FETCH_SUCCESS";
export const FETCH_FAIL ="FETCH_FAIL";

export const fetchStart = ()=>{
    return({type: FETCH_START})
}

export const fetchSuccess = (cat)=>{
    return({type: FETCH_SUCCESS, payload:cat })
}

export const fetchFail = (error)=>{
    return({type: FETCH_FAIL, payload: error})
}
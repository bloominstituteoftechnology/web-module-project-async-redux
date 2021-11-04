import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";


export const getData = () => dispatch => {
    dispatch(fetchStart());
    
    axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then(resp=> {
            dispatch(fetchSuccess(resp.data.data[Math.floor(Math.random() * resp.data.data.length)]));
            console.log(resp.data[0]);
        })
        .catch(err => {
            dispatch(fetchFail(err));
        });
}


export const fetchStart = ()=> {
    return ({type:FETCH_START});
}

export const fetchSuccess = (data)=> {
    return ({type:FETCH_SUCCESS, payload:data});
}

export const fetchFail = (err)=> {
    return ({type:FETCH_FAIL, payload:err});
}
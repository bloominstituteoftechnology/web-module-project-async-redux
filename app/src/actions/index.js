import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getGiphy = () => {
  return (dispatch)=> {
    dispatch(fetchStart());

    axios.get("https://api.giphy.com/v1/gifs/random?api_key=FDgeYqZEzcYYiN0XM4CO6EJDYPGNsYq8&tag=&rating=g")
        .then(resp=> {
          console.log("res---",resp.data.data);
          dispatch(fetchSuccess(resp.data.data));
        })
        .catch(err=>{
          dispatch(fetchFail(err));
        });

  }
    
}

export const fetchStart = ()=>{
  return({type: FETCH_START});
}

export const fetchSuccess = (giphy)=> {
  return({type: FETCH_SUCCESS, payload: giphy});
} 

export const fetchFail = (error)=> {
  return({type: FETCH_FAIL, payload: error});
}
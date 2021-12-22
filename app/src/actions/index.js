import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getShow = () => dispatch => {
    // axios.get('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
    //   .then(resp => {
    //     // console.log(resp.data);
    //   })
    //   .catch(error => {
    //     dispatch(fetchFail(error))
    //   })
    dispatch(fetchStart());

    axios.get("http://phish.in/api/v1/random-show.json", {
        headers: {
            authorization: "Bearer bc8ca9c920a0c0f9dddf5177e73d1c435f2b72fdde5f18a61605990dbe911b85b19959f692ff08793bc1821fc4ce1efe",
            accept: 'application/json'
        }
    })
      .then(resp => {
        // console.log(resp.data.data);
        dispatch(fetchSuccess(resp.data.data))
      })
      .catch(err => {
        console.log(err)
      dispatch(fetchFail(err))
    })
}


export const fetchStart = () => {
    return({type: FETCH_START})
};

export const fetchSuccess = (show) => {
    return({type: FETCH_SUCCESS, payload: show})
};

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error})
}
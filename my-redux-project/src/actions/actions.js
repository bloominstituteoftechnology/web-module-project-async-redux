import axios from 'axios';

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

//here we are writing our action creator

export const fetchFact = () => (dispatch) => {

    dispatch({type: FETCHING_START});
    axios.get("https://cat-fact.herokuapp.com/facts")
        .then((res => {
            console.log("Cat Data:", res.data[0]); //res.data[0]? -- what is this doing?
            dispatch({type: FETCHING_SUCCESS, payload: res.data[0]})
        }))
        .catch(err => {
            console.log(err);
            dispatch({type: FETCHING_FAILURE, payload: err})
        });
}
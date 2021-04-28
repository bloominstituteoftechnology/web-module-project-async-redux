import axios from 'axios';

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";

//here we are writing our action creator

export const fetchFact = () => (dispatch) => {

    dispatch({type: FETCHING_START});
    axios.get("https://cat-fact.herokuapp.com/facts")
        .then((res => {
            console.log("Cat Data:", res.data[0].text); //first thing after your .then just console.log, CHECK NOW before writing the Dispatch - b/c once the dispatch fires you can't see the data
            dispatch({type: FETCHING_SUCCESS, payload: res.data[0].text}) //dealing with an array of objects - have not figure out how to go through the entire array
        }))
        .catch(err => {
            console.log(err);
            dispatch({type: FETCHING_FAILURE, payload: err})
        });
}
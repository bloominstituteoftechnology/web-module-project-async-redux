import axios from 'axios';

export const FETCH_MEME_START = "FETCH_MEME_START";
export const FETCH_MEME_SUCCESS = "FETCH_MEME_SUCCESS";
export const FETCH_MEME_FAIL = "FETCH_MEME_FAIL";

export const getMeme = () => dispatch =>{
    dispatch( {type:"FETCH_MEME_START"} );
    axios
        .get('https://meme-api.herokuapp.com/gimme/wholesomememes/5')
        .then((res)=>{
            console.log(res.data.memes);
            dispatch({type:"FETCH_MEME_SUCCESS",payload: res.data.memes})
        })
        .catch(err=>{
            dispatch({type:"FETCH_MEME_FAIL", payload:"ERROR!"})
        })

}
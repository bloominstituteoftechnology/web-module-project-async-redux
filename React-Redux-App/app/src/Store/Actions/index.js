import axios from "axios";

export const FETCH_ANIME_SUCCESS = "FETCH_ANIME_SUCCESS";
export const FETCH_ANIME_START = "FETCH_ANIME_START";
export const FETCH_ANIME_FAILURE = "FETCH_ANIME_FAILURE";

export const fetchData = () =>{
    return (dispatch) => {
        dispatch({type: FETCH_ANIME_START});

        axios
            .get("https://api.jikan.moe/v3/search/anime?q=DragonBall&page=1")
            .then((res)=>{
                console.log(res.data.results)
                dispatch({type: FETCH_ANIME_SUCCESS, payload: res.data.results})
            })
            .catch((err)=>{
                dispatch({type: FETCH_ANIME_FAILURE, payload: err.message})
            })

    }
}
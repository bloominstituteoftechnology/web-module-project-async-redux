import axios from "axios";

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";

export const getCharacters = () => {
    return (dispatch) => {
        dispatch ({type: FETCH_CHARACTERS})
        axios.get('https://api.disneyapi.dev/characters')
            .then((res) => {
                dispatch ( { type: FETCH_CHARACTERS_SUCCESS, payload: res.data.data });
            })
            .catch((err) => {
                console.log(err.message)
            });
    }
}
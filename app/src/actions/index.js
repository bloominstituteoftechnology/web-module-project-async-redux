import axios from "axios";
export const ADD_GENRE = "ADD_GENRE";
export const FETCHING_GENRE = "FETCHING_GENRE";

export const getGenre = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_GENRE });
    axios
      .get("https://binaryjazz.us/wp-json/genrenator/v1/genre/")
      .then((res) => {
        dispatch({ type: ADD_GENRE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addGenre = (genre) => {
  return { type: ADD_GENRE, payload: genre };
};

export const fetchingGenre = () => {
  return { type: FETCHING_GENRE };
};

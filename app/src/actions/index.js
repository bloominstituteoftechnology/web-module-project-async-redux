export const ADD_GENRE = "ADD_GENRE";
export const FETCHING_GENRE = "FETCHING_GENRE";

export const addGenre = (genre) => {
  return { type: ADD_GENRE, payload: genre };
};

export const fetchingGenre = () => {
  return { type: FETCHING_GENRE };
};

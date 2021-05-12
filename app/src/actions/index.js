export const ADD_GENRE = "ADD_GENRE";

export const addGenre = (genre) => {
  return { type: ADD_GENRE, payload: genre };
};

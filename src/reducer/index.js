import { zipCodeData } from "../zipCodeData/zipCodeData";

const initialState = {
  zipCodeData: zipCodeData,
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;

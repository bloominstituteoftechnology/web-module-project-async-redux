import axios from "axios";
import { bindActionCreators } from "redux";

export const ADVICE_START = "ADVICE_START";
export const ADVICE_SUCCESS = "ADVICE_SUCCESS";
export const ADVICE_FAILURE = "ADVICE_FAILURE";

export const giveAdvice = () => (dispatch) => {
  dispatch({ type: ADVICE_START });
  axios
    .get("https://api.adviceslip.com/advice")
    .then((res) => {
      console.log("Some Advice:", res.data.slip.advice);
      dispatch({ type: ADVICE_SUCCESS, payload: res.data.slip.advice });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADVICE_FAILURE, payload: err });
    });
};

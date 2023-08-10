import cardReducer from "./cardReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({cardReducer: cardReducer});
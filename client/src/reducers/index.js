import { combineReducers } from "redux";
import alert from "../reducers/alert";
import reserve from "../reducers/reserve";
export default combineReducers({ alert, reserve });

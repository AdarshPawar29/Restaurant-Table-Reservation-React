import axios from "axios";
import { setAlert } from "../actions/alert";
import { ORDER_SUCCESS, LOAD_ORDER } from "./Types";

export const makeOrder =
  ({ time, date, guests, name, wishes, phone }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, guests, date, time, wishes, phone });

    try {
      const res = await axios.post("/api/newOrder", body, config);
      dispatch({
        type: ORDER_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
    }
  };

export const loadOrder = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/orders/:phone");

    dispatch({
      type: LOAD_ORDER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
